import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { useGetBlogByIdQuery, useCreateBlogMutation, useUpdateBlogMutation } from '../../store/apiSlice';
import { Image as ImageIcon, Loader2 } from 'lucide-react';

const AdminWriteBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: '',
    tags: '',
    author: 'Admin',
    status: 'Published',
    isFeatured: false,
    isTrending: false,
  });
  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState('');
  const [content, setContent] = useState('');
  const [saving, setSaving] = useState(false);
  const [isHtmlMode, setIsHtmlMode] = useState(false);

  const { data: blogResponse, isSuccess } = useGetBlogByIdQuery(id, { skip: !isEditing });
  const [createBlog] = useCreateBlogMutation();
  const [updateBlog] = useUpdateBlogMutation();

  useEffect(() => {
    if (isEditing && isSuccess && blogResponse?.data) {
      const blog = blogResponse.data;
      setFormData({
        title: blog.title,
        slug: blog.slug || '',
        category: blog.category,
        tags: blog.tags ? blog.tags.join(', ') : '',
        author: blog.author || 'Admin',
        status: blog.status,
        isFeatured: blog.isFeatured || false,
        isTrending: blog.isTrending || false,
      });
      setPreviewImage(blog.image);
      setContent(blog.content);
    }
  }, [isEditing, isSuccess, blogResponse]);

  const handleInputChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    
    if (e.target.name === 'title' && !isEditing) {
      const generatedSlug = value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      setFormData({ ...formData, title: value, slug: generatedSlug });
    } else {
      setFormData({ ...formData, [e.target.name]: value });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('slug', formData.slug);
      data.append('category', formData.category);
      data.append('tags', formData.tags);
      data.append('author', formData.author);
      data.append('status', formData.status);
      data.append('isFeatured', formData.isFeatured);
      data.append('isTrending', formData.isTrending);
      data.append('content', content);

      if (imageFile) {
        data.append('image', imageFile);
      }

      if (isEditing) {
        await updateBlog({ id, formData: data }).unwrap();
      } else {
        await createBlog(data).unwrap();
      }
      navigate('/admin/blogs');
    } catch (error) {
      console.error('Failed to save blog', error);
      alert(error.data?.message || 'Failed to save blog');
    } finally {
      setSaving(false);
    }
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image', 'video'],
      ['clean']
    ],
  };

  // Add custom dark theme styles for Quill
  const quillStyles = `
    .ql-toolbar.ql-snow {
      background-color: #0a0e17;
      border-color: #374151;
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }
    .ql-container.ql-snow {
      background-color: #111827;
      border-color: #374151;
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
      color: #e5e7eb;
      font-family: inherit;
    }
    .ql-snow .ql-stroke {
      stroke: #9ca3af;
    }
    .ql-snow .ql-fill {
      fill: #9ca3af;
    }
    .ql-snow .ql-picker {
      color: #9ca3af;
    }
    .ql-snow .ql-picker-options {
      background-color: #1f2937;
      border-color: #374151;
    }
    .ql-snow .ql-picker-item {
      color: #e5e7eb;
    }
    .ql-snow .ql-picker-item:hover {
      color: #fce484;
    }
    .ql-snow.ql-toolbar button:hover .ql-stroke, 
    .ql-snow .ql-toolbar button:hover .ql-stroke, 
    .ql-snow.ql-toolbar button:focus .ql-stroke, 
    .ql-snow .ql-toolbar button:focus .ql-stroke, 
    .ql-snow.ql-toolbar button.ql-active .ql-stroke, 
    .ql-snow .ql-toolbar button.ql-active .ql-stroke, 
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke, 
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke, 
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke, 
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke, 
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke, 
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke, 
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke, 
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke, 
    .ql-snow.ql-toolbar button:hover .ql-stroke-miter, 
    .ql-snow .ql-toolbar button:hover .ql-stroke-miter, 
    .ql-snow.ql-toolbar button:focus .ql-stroke-miter, 
    .ql-snow .ql-toolbar button:focus .ql-stroke-miter, 
    .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter, 
    .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter, 
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter, 
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter, 
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter, 
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter, 
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter, 
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter, 
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter, 
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
      stroke: #fce484;
    }
    .ql-snow.ql-toolbar button:hover .ql-fill, 
    .ql-snow .ql-toolbar button:hover .ql-fill, 
    .ql-snow.ql-toolbar button:focus .ql-fill, 
    .ql-snow .ql-toolbar button:focus .ql-fill, 
    .ql-snow.ql-toolbar button.ql-active .ql-fill, 
    .ql-snow .ql-toolbar button.ql-active .ql-fill, 
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill, 
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill, 
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill, 
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill, 
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill, 
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill, 
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill, 
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill {
      fill: #fce484;
    }
  `;

  return (
    <div className="bg-gray-900 rounded-xl shadow-sm border border-gray-800 p-6">
      <style>{quillStyles}</style>
      <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
        {isEditing ? 'Edit Blog Article' : 'Write New Blog Article'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2">Title</label>
            <input
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-[#0a0e17] border border-gray-700/80 rounded-lg text-white focus:ring-1 focus:ring-brand-yellow/50 focus:border-brand-yellow/50 outline-none placeholder-gray-600"
              placeholder="e.g. 10 SEO Tips for 2025"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2">Slug</label>
            <input
              type="text"
              name="slug"
              required
              value={formData.slug}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-[#0a0e17] border border-gray-700/80 rounded-lg text-white focus:ring-1 focus:ring-brand-yellow/50 focus:border-brand-yellow/50 outline-none placeholder-gray-600"
              placeholder="e.g. 10-seo-tips-for-2025"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2">Category</label>
            <select
              name="category"
              required
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-[#0a0e17] border border-gray-700/80 rounded-lg text-white focus:ring-1 focus:ring-brand-yellow/50 focus:border-brand-yellow/50 outline-none"
            >
              <option value="" disabled>Select a Category</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="SEO">SEO</option>
              <option value="Social Media">Social Media</option>
              <option value="Google Ads">Google Ads</option>
              <option value="Content Marketing">Content Marketing</option>
              <option value="Branding">Branding</option>
              <option value="Career Tips">Career Tips</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2">Author Name</label>
            <input
              type="text"
              name="author"
              required
              value={formData.author}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-[#0a0e17] border border-gray-700/80 rounded-lg text-white focus:ring-1 focus:ring-brand-yellow/50 focus:border-brand-yellow/50 outline-none placeholder-gray-600"
              placeholder="e.g. Priya Sharma"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2">Cover Image Upload</label>
            <div className="flex items-center gap-4">
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-4 py-1.5 bg-[#0a0e17] border border-gray-700/80 rounded-lg text-gray-400 file:mr-4 file:py-1.5 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-bold file:bg-gray-800 file:text-brand-yellow hover:file:bg-gray-700 outline-none transition-colors"
              />
              {previewImage && (
                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-gray-700 bg-gray-800">
                  <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2">Tags (Comma separated)</label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-[#0a0e17] border border-gray-700/80 rounded-lg text-white focus:ring-1 focus:ring-brand-yellow/50 focus:border-brand-yellow/50 outline-none placeholder-gray-600"
              placeholder="e.g. SEO, Growth, Marketing"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-[#0a0e17] border border-gray-700/80 rounded-lg text-white focus:ring-1 focus:ring-brand-yellow/50 focus:border-brand-yellow/50 outline-none"
            >
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
            </select>
          </div>
          <div className="md:col-span-2 flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer text-gray-300 font-medium">
              <input
                type="checkbox"
                name="isFeatured"
                checked={formData.isFeatured}
                onChange={handleInputChange}
                className="w-4 h-4 rounded border-gray-700 bg-gray-900 text-brand-yellow focus:ring-brand-yellow/50 focus:ring-offset-gray-900"
              />
              Featured Article (Hero section)
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-gray-300 font-medium">
              <input
                type="checkbox"
                name="isTrending"
                checked={formData.isTrending}
                onChange={handleInputChange}
                className="w-4 h-4 rounded border-gray-700 bg-gray-900 text-brand-yellow focus:ring-brand-yellow/50 focus:ring-offset-gray-900"
              />
              Trending Article (Sidebar)
            </label>
          </div>
        </div>

        <div className="pt-4">
          <div className="flex items-center justify-between mb-3">
            <label className="block text-sm font-bold text-gray-300">Content</label>
            <button
              type="button"
              onClick={() => setIsHtmlMode(!isHtmlMode)}
              className="text-xs px-3 py-1.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 rounded-md font-medium transition-colors"
            >
              {isHtmlMode ? 'Switch to Visual Editor' : 'Switch to HTML Editor'}
            </button>
          </div>

          <div className="rounded-lg h-96">
            {isHtmlMode ? (
              <textarea
                value={content.replace(/&nbsp;/g, ' ')}
                onChange={(e) => setContent(e.target.value)}
                className="w-full h-full p-4 font-mono text-sm bg-[#0a0e17] text-green-400 border border-gray-700/80 rounded-lg outline-none resize-none focus:ring-1 focus:ring-brand-yellow/50 focus:border-brand-yellow/50 shadow-inner"
                placeholder="<p>Write your raw HTML here...</p>"
              />
            ) : (
              <ReactQuill
                theme="snow"
                value={content}
                onChange={(val, delta, source) => {
                  if (source === 'user') {
                    setContent(val);
                  }
                }}
                modules={modules}
                className="h-full pb-10 prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-brand-yellow hover:prose-a:text-[#d99820] prose-strong:text-white prose-img:rounded-xl prose-img:border prose-img:border-gray-800"
              />
            )}
          </div>
        </div>

        <div className="pt-8 flex justify-end gap-3">
          <button
            type="button"
            onClick={() => navigate('/admin/blogs')}
            className="px-6 py-2 bg-gray-800 border border-gray-700 text-gray-300 rounded-lg font-bold hover:bg-gray-700 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-2 bg-gradient-to-b from-[#fce484] to-[#d99820] hover:from-[#fdf1b6] hover:to-[#ebaa2e] text-black rounded-lg font-bold transition-all flex items-center justify-center min-w-[120px] shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? <><Loader2 className="w-4 h-4 animate-spin mr-2" /> Saving...</> : (isEditing ? 'Update Blog' : 'Publish Blog')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminWriteBlog;
