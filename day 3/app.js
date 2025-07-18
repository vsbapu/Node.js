// creat server and setheader file and html code write //

const http = require('http');

http.createServer((req, res) => {
    res.setHeader("Content-type", "text/html")
    res.write(`
        <html>
        <head>
        <title> html page </title>
        </head>
        <body>
        <form >
        <h3>`+25+`</h3>
        <h2>`+ new Date()+`</h2>

        <input type="text" name="name"  /></br>
        <input type="email" name="email"  /></br>
        <input type="number" name="age"  /></br>
        <input type="file" name="image" /></br>
        <button type="submit"> Submit</button> 
        </form>
        </body>
        </html>
        `);
    res.end();
}).listen(5000);