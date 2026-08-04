import express from 'express';
import {
  createBlog,
  getBlogs,
  getBlogBySlug,
  getBlogById,
  updateBlog,
  deleteBlog,
} from '../controllers/blogController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';
import multer from 'multer';

const router = express.Router();

// Setup Multer for Memory Storage
const upload = multer({ storage: multer.memoryStorage() });

router.route('/')
  .get(getBlogs)
  .post(protect, admin, upload.single('image'), createBlog);

router.route('/:slug')
  .get(getBlogBySlug);

router.route('/id/:id')
  .get(protect, admin, getBlogById)
  .put(protect, admin, upload.single('image'), updateBlog)
  .delete(protect, admin, deleteBlog);

export default router;
