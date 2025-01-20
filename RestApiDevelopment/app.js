import express from 'express';
const app = express();
const port = 3000;

//middleware
app.use(express.json())

let books = [
    {id:1, title: '2 min rule'},
    {id:2, title: 'the power of now'},
    {id:3, title: 'focus matters'},

];

//introductory route

app.get('/',(req,res)=>{
    res.json({
        message: "welcome to bookstore Api",
    })
});

// get all routes

app.get('/get',(req,res)=>{
    res.json(books);
});

//get a single book

app.get('/get/:id',(req,res)=>{
    const book = books.find(item => item.id === +req.params.id)
    if(book){
        res.status(200).json(book);
    } else {
        res.status(404).json({
            message: 'book not found please try again with a different book id'
        })
    }
}) 

// add a new book

app.post('/add',(req,res)=>{
    const newBook = {
        id: Math.floor(Math.random()*100),
         title: `Book ${Math.floor(Math.random()*100)}`
        
}

books.push(newBook);

res.status(200).json({
    data: newBook,
    message : 'new book added successfully'
})
});

// update a book
app.put('/update/:id', (req,res)=>{
    const findCurrentBook = books.find(bookItem => bookItem.id === +req.params.id)
    if(findCurrentBook){
        findCurrentBook.title = req.body.title || findCurrentBook.title;
        res.status(200).json({
            message: `book with id ${req.params.id} updated successfully`,
            data : findCurrentBook
        })
    } else { 
        res.status(404).json({
            message: 'book not found'
        })
    } 
})

// delete

app.delete('/delete/:id',(req,res)=>{
    const findCurrentIndex = books.findIndex(Item => Item.id === +req.params.id);
    if(findCurrentIndex !== -1) {
        const deletedBook = books.splice(findCurrentIndex, 1)
        res.status(200).json({
            message: 'book deleted successfully',
            data : deletedBook[0]
        })
    } else{
        res.status(404).json({
            message: 'book not found'
        })
    }
})



app.listen(port, ()=>{
    console.log("server is running on port", port)
})