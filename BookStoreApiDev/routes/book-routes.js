import express from 'express';

import bookController from '../controllers/book-controller.js';

// create express router 

const router = express.Router();

// all routes that are related to books

router.get('/get', bookController.getAllBooks );
router.get('/get/:id', bookController.getSingleBookbyId);
router.post('/add', bookController.addNewBook);
router.put('/update/:id', bookController.updateBook);
router.delete('/delete/:id', bookController.deleteBook);

export default router;