import express from 'express';
import UserController from '../controllers/auth-controller.js'
const router = express.Router();

// all routes related to authentication and authorization
router.post('/register', UserController.registerUser)
router.post('/login',UserController.loginterUser)

export default router;