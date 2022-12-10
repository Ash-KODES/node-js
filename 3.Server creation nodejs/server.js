const http=require('http');

http.createServer((req,res)=>{
    res.write("<h1>I will crack the best life possible</h1>");
    res.end();
}).listen(6999);