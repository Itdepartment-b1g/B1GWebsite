import { Router } from 'express';
import contactController from '../controller/contactController';

const router = Router();

// POST /api/contact/submit - Submit contact form
router.post('/submit', contactController.submitContactForm);

// GET /api/contact/data - Get all contact data (for admin purposes)
router.get('/data', contactController.getContactData);

export default router; 