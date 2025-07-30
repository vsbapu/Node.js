// check the hostname //
const http=require('http');
const { hostname } = require('os');

http.createServer((req,res)=>{
    // req.headers(hostname);
    // res.write(hostname);
    console.log(req.headers.host);  // check the hostname/headers/ //
    
    res.end("hello");
}).listen(4500);