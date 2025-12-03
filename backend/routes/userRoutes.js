import express from 'express';
import { profile, listUsers } from '../controllers/userControllers.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/profile', profile);
router.get('/', listUsers);

export default router;
