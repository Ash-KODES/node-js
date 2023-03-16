const http=require('http');
//installed package->colors
const color=require('colors');
// Basic API
http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'server_data\json'});
    res.write(JSON.stringify({name:'Ashutosh'}));
    res.end();
}).listen(4001);

/*
how to initialize package.json?
npm init
how to install dependency from package.json(or create node modules)?
npm install
*/
console.log("package".red);