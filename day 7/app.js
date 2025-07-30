// html file load in node.js //

const http=require("http");   
const fs=require("fs");                                             // require the module fs file-stytem //

http.createServer((req,res)=>{
    fs.readFile('Home.html','utf-8',(err,data)=>{                   // read to html file //
        if (err) {                                                  // error hendling // 
            res.writeHead(500,{"content-type":"text/plain"})        // error code // 
            res.writable("Somthi went rong");                       // show the error //  
            res.end();  
            return                                                      
        }
        res.writeHead(200,{"content-type":"text/html"});           // check the html file  // 
        res.write(data);                                           //   show html file //
        res.end();
    })
}).listen(3500);                                                    // port  number //