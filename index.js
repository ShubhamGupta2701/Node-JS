// const math = require("./math");

// console.log(math);
// console.log("sum of 2 numbers 5 and 8 is : ",math.add(5,8));

const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    const log =`${Date.now()} : ${req.url} : New request Recieved\n`;
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(req.url){
            case "/":
                res.end("Home Page");
                break;
            case "/about":
                res.end("About Page, my name is shubham");
                break;
            default:
                res.end("404 not found");
        }
        
    });
});

server.listen(3000,()=>{console.log("server started")});
