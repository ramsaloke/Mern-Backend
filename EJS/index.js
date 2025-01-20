import express from 'express';
import path from 'path'
import { fileURLToPath } from 'url';

const app = express()

// Get the __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// install ejs , make a directory in same folder   

//set the view engine as ejs
app.set('view engine','ejs')

// set the directory for the views
app.set('views',path.join(__dirname,'views'));

const products = [
    {id: 1, title: "product 1"},
    {id: 2, title: "product 2"},
    {id: 3, title: "product 3"},
];

app.get('/',(req,res)=>{
    // create home.ejs in views directory
    res.render('home',{title : 'Home', products: products})
})

app.get('/about',(req,res)=>{
    res.render('about',{title: 'About page'})
})

const port = 3000;

app.listen(port , ()=>{
    console.log("server is listening on port ", port)
})