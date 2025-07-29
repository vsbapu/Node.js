const http=require('http');
const { hostname } = require('os');
const { json } = require('stream/consumers');

http.createServer((req,res)=>{
    console.log(req.headers(hostname));
    res.end("hello");
}).listen(4500);