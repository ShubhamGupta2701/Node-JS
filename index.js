// const math = require("./math");

// console.log(math);
// console.log("sum of 2 numbers 5 and 8 is : ",math.add(5,8));

const http = require('http');
const fs = require('fs');
const url = require("url");

const server = http.createServer((req,res)=>{
    const log =`${Date.now()} : ${req.url} : New request Recieved\n`;
    const myURL = url.parse(req.url,true);
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(myURL.pathname){
            case "/":
                res.end("Home Page");
                break;
            case "/about":
                if(myURL.query.name){
                    const username = myURL.query.name;
                    res.end(`About Page, Hi ${username}`);
                break;
                }
                else{
                    res.end(`About Page, Hi developer`);
                    break;
                }
            case "/search":
                const search = myURL.query.search;
                res.end(`Here are the results for : ${search}`)
                break;
            default:
                res.end("404 not found");
        }
        
    });
});

server.listen(3000,()=>{console.log("server started")});