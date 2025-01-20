import express from 'express';
const router = express.Router();
import authMiddleware from '../middleware/auth-middleware.js';
import adminMiddleware from '../middleware/admin-middleware.js';

router.get('/welcome', authMiddleware, adminMiddleware, (req,res)=>{
    res.status(200).json({
        message: 'welcome to the admin page'
    })
})

export default router;