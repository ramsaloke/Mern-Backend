import express from 'express';

const app = express();

// define middleware function

const myFirstMiddleware = (req,res,next)=>{
console.log("this first middlware will run on every request")

next();
}

app.use(myFirstMiddleware);

app.get('/',(req,res)=>{
    res.send("Home page")
});

app.get('/about',(req,res)=>{
    res.send("this is about page")
})

app.listen(8080,()=>{
    console.log("server is running on port 8080")
})