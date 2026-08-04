import Blog from '../models/Blog.js';
import { uploadFileToS3 } from '../utils/uploadS3.js';

// @desc    Create a new blog
// @route   POST /api/blog
// @access  Private/Admin
export const createBlog = async (req, res, next) => {
  try {
    const { title, slug: frontendSlug, content, category, author, tags, status, isFeatured, isTrending } = req.body;

    if (!title || !content || !category) {
      res.status(400);
      throw new Error('Title, content, and category are required');
    }

    // Use provided slug or generate from title
    let slug = frontendSlug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    
    // Check if slug exists, if so append random string
    const existingBlog = await Blog.findOne({ slug });
    if (existingBlog) {
      slug = `${slug}-${Math.floor(Math.random() * 10000)}`;
    }

    let imageUrl = '';
    if (req.file) {
      imageUrl = await uploadFileToS3(req.file.buffer, req.file.originalname, req.file.mimetype, 'blogs');
    }

    // Calculate read time (rough estimate: 200 words per minute)
    const wordCount = content.replace(/<[^>]*>?/gm, '').split(/\s+/).length;
    const readTime = Math.max(1, Math.ceil(wordCount / 200)) + ' min read';

    const tagsArray = tags ? tags.split(',').map(t => t.trim()).filter(t => t) : [];

    const blog = await Blog.create({
      title,
      slug,
      content,
      category,
      author: author || 'Admin',
      tags: tagsArray,
      image: imageUrl,
      readTime,
      status: status || 'Published',
      isFeatured: isFeatured === 'true' || isFeatured === true,
      isTrending: isTrending === 'true' || isTrending === true,
    });

    res.status(201).json({ message: 'Blog created successfully', data: blog });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all blogs (with optional filters)
// @route   GET /api/blog
// @access  Public
export const getBlogs = async (req, res, next) => {
  try {
    const { category, isFeatured, isTrending, status, limit, search, page, excludeId } = req.query;
    
    let query = {};
    if (category && category !== 'All Articles') query.category = category;
    if (isFeatured === 'true') query.isFeatured = true;
    if (isTrending === 'true') query.isTrending = true;
    if (status) query.status = status;
    if (excludeId) query._id = { $ne: excludeId };
    
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } },
        { tags: { $regex: search, $options: 'i' } }
      ];
    }

    const pageNum = Number(page) || 1;
    const limitNum = Number(limit) || 20;
    const skip = (pageNum - 1) * limitNum;

    const total = await Blog.countDocuments(query);
    const blogs = await Blog.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limitNum);

    res.json({
      data: blogs,
      page: pageNum,
      pages: Math.ceil(total / limitNum),
      total
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single blog by slug
// @route   GET /api/blog/:slug
// @access  Public
export const getBlogBySlug = async (req, res, next) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });

    if (blog) {
      // Increment views
      blog.views += 1;
      await blog.save();
      res.json({ data: blog });
    } else {
      res.status(404);
      throw new Error('Blog not found');
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Get single blog by ID (For Admin Editing)
// @route   GET /api/blog/id/:id
// @access  Private/Admin
export const getBlogById = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog) {
      res.json({ data: blog });
    } else {
      res.status(404);
      throw new Error('Blog not found');
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Update a blog
// @route   PUT /api/blog/:id
// @access  Private/Admin
export const updateBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (blog) {
      const { title, slug: frontendSlug, content, category, author, tags, status, isFeatured, isTrending } = req.body;

      let imageUrl = blog.image;
      if (req.file) {
        imageUrl = await uploadFileToS3(req.file.buffer, req.file.originalname, req.file.mimetype, 'blogs');
      }

      const tagsArray = tags ? (typeof tags === 'string' ? tags.split(',').map(t => t.trim()).filter(t => t) : tags) : blog.tags;

      let readTime = blog.readTime;
      if (content && content !== blog.content) {
         const wordCount = content.replace(/<[^>]*>?/gm, '').split(/\s+/).length;
         readTime = Math.max(1, Math.ceil(wordCount / 200)) + ' min read';
      }

      blog.title = title || blog.title;
      
      let newSlug = frontendSlug || blog.slug;
      if (newSlug !== blog.slug || !blog.slug) {
         if (!newSlug && blog.title) {
            newSlug = blog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
         }
         const existingBlog = await Blog.findOne({ slug: newSlug, _id: { $ne: blog._id } });
         if (existingBlog) newSlug = `${newSlug}-${Math.floor(Math.random() * 10000)}`;
      }
      blog.slug = newSlug;
      
      blog.content = content || blog.content;
      blog.category = category || blog.category;
      blog.author = author || blog.author;
      blog.tags = tagsArray;
      blog.image = imageUrl;
      blog.readTime = readTime;
      blog.status = status || blog.status;
      
      if (isFeatured !== undefined) blog.isFeatured = isFeatured === 'true' || isFeatured === true;
      if (isTrending !== undefined) blog.isTrending = isTrending === 'true' || isTrending === true;

      const updatedBlog = await blog.save();
      res.json({ message: 'Blog updated', data: updatedBlog });
    } else {
      res.status(404);
      throw new Error('Blog not found');
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a blog
// @route   DELETE /api/blog/:id
// @access  Private/Admin
export const deleteBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog) {
      await blog.deleteOne();
      res.json({ message: 'Blog removed' });
    } else {
      res.status(404);
      throw new Error('Blog not found');
    }
  } catch (error) {
    next(error);
  }
};
