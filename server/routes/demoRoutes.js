import express from 'express';
import {
  bookDemo,
  getDemos,
  updateDemoStatus,
  deleteDemo,
} from '../controllers/demoController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').post(bookDemo).get(protect, admin, getDemos);
router.route('/:id/status').put(protect, admin, updateDemoStatus);
router.route('/:id').delete(protect, admin, deleteDemo);

export default router;
