const fs = require("fs")

// fs.writeFileSync('./test.txt',"HI THIS IS SHUBHAM and i am 23 years old")  // used to create a file is not present and if present then overwrite the contents of it
// fs.writeFile('./test.txt',"HI THIS IS SHUBHAM and i am 23 years old",(err)=>{})  // used to create a file is not present and if present then overwrite the contents of it //async 


// const data = fs.readFileSync("./test.txt","utf-8");  // this is used to read the contents of the file\
// console.log(data);
fs.readFile("./test.txt","utf-8",(err,result)=>{
    if(err){
        console.log("error occur : ", err);
    }
    else{
        console.log(result);
    }
});  // this is used to read the contents of the file - async in nature
