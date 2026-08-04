import express from 'express';
import {
  submitContact,
  getContacts,
  updateContactStatus,
  deleteContact,
} from '../controllers/contactController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').post(submitContact).get(protect, admin, getContacts);
router.route('/:id/status').put(protect, admin, updateContactStatus);
router.route('/:id').delete(protect, admin, deleteContact);

export default router;
