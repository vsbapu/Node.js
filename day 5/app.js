const http=require('http');

http.createServer((req,res)=>{
    console.log(req.headers(hostname));
    res.end("hello");
}).listen(4500);