// extenal package install and nodemon and colors //

const http=require('http');
const colors=require('colors');

console.log(colors.red('<h1>hello</h1>'));
console.log(colors.green('<h1>hello</h1>'));
console.log(colors.yellow('<h1>hello</h1>'));
console.log(colors.black('<h1>hello</h1>'));
console.log(colors.white('<h1>hello</h1>'));
console.log(colors.grey('<h1>hello</h1>'));
console.log(colors.blue('<h1>hello</h1>'));
http.createServer((req,res)=>{
    res.write('hello');
    res.end('end');
    
}).listen(4800);