import express from 'express';
import * as authController from '../controllers/authController.js';

const router = express.Router();

// POST /api/register
router.post('/register', authController.validateRegister, authController.register);

// POST /api/login
router.post('/login', authController.validateLogin, authController.login);

export default router; 