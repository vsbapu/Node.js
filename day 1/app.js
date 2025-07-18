
// Creact server and print message in browser //


const http =require('http');

http.createServer((req,res)=>{
    res.write('<h1>Day first in node.js</h1>');
    res.end('hello');
}).listen(5000);
