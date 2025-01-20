
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import connetcToDB from './Database/db.js';
import authRoutes  from './routes/auth-routes.js';
import homeRoutes from './routes/home-routes.js';
import adminRoutes from './routes/admin-routes.js';
import uploadImageRoutes from './routes/image-routes.js';


connetcToDB()

const app = express();

const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/home', homeRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/image', uploadImageRoutes)

app.listen(PORT,()=>{
    console.log("app is listening on port", PORT);
})