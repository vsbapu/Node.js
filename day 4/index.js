// simpal API makeing //

const http=require('http');

http.createServer((req,res)=>{
    const data=[
        {
            name:"vishubha",
            age:25,
            email:'vishubha@gmail.com'
        },
        {
            name:"subhash",
            age:29,
            email:'subhash@gmail.com'
        },
        {
            name:"vishu",
            age:271,
            email:'vishu@gmail.com'
        },
        {
            name:"hi",
            age:28,
            email:'hi@gmail.com'
        },
    ]
    res.setHeader("Content-Type",'application/json');
    res.write(JSON.stringify(data));
    res.end();
}).listen(9999);