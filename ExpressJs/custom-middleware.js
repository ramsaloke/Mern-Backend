import express from 'express';
const app = express();

const requestTimestampLogger = (req,res,next)=>{
    const timeStamp = new Date().toISOString();
    const timeNow = timeStamp.slice(0,19).replace('T'," ")
    console.log(`${timeNow} from ${req.method} to ${req.url}`)
    next();
}

app.use(requestTimestampLogger);

app.get('/',(req,res)=>{
    res.send("Home page")
});

app.get('/about',(req,res)=>{
    res.send("this is about page")
})

app.listen(8080, ()=>{
    console.log("app is listening on 8080")
})