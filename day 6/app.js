// daynamik port //

const http = require('http');  // create server //
const port = process.argv[2]; 
console.log(port);
http.createServer((req, res) => {
    res.write(`this is dayanamik port number =${port}`);
    res.end();
}).listen(port);