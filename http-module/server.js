import {createServer} from 'http';

const server = createServer((req,res)=>{
    console.log(req, "reqajfha;jkl");
    res.writeHead(200, {"content-type": "text/plain"});
    res.end("hello world im a best software engineer")

});

const port = 3000;

server.listen(port,()=>{
    console.log(`server is listening to port ${port}`)
})