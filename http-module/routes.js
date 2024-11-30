import {createServer} from 'http';

const server = createServer((req,res)=>{
    const url = req.url;

    if(url === "/") {
        res.writeHead(200, {"content-type": "text/plain"})
        res.end("this is home page")
    } else if (url === "/projects") {
        res.writeHead(200, {"content-type": "text/plain"})
        res.end("this is projects page")
    } else {
        res.end("this page is not found here please try again later")
    }

})

const port = 3000;
server.listen(port,()=>{
    console.log(`server is listening to port ${port}`);
})