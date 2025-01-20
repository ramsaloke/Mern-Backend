import express from 'express';
const router = express.Router();
import authMiddleware from '../middleware/auth-middleware.js';

router.get('/welcome', authMiddleware, (req,res)=>{
    const {userId , username , role} = req.userInfo;
    res.json({
        message: `Welcome to the home page`,
        user: {
            _id: userId,
            username,
            role,
        }
    })
})

export default router;