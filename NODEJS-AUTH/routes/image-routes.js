import express from 'express';
import uploadMiddleware from '../middleware/upload-middleware.js';
import authMiddleware from '../middleware/auth-middleware.js';
import adminMiddleware from '../middleware/admin-middleware.js';
import uploadImageController from '../controllers/image-controller.js'

const router = express.Router();


// upload the image
router.post('/upload', authMiddleware ,adminMiddleware, uploadMiddleware.single('image'), uploadImageController)
//to get all the image



export default router;