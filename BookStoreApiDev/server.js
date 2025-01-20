import dotenv from 'dotenv';
dotenv.config(); // always in top

import connectToDB from './database/db.js';

import bookRoutes from './routes/book-routes.js';

import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

// connenct to our database
connectToDB();

//middlware => express.jso()
app.use(express.json());

// routes here
app.use('/api/books/' , bookRoutes)

app.listen(PORT, ()=>{
    console.log("server is now running on port ", PORT)
})