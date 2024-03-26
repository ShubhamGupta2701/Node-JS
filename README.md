# Node JS

- It is an open source, cross platform JS runtime enviroment and library for running web applications outside the client's system.
- It provides server side programming outside of the browser.

## Modules

- Modules are block of code which is used to help us to code more easliy
- In JS Modules are mothing but predefined code which we use to work more efficiently
- Each module contains related functionalities

### How to import and export any module or function

- Import : const varName = require("moduleName) // if preInstalled module
- Import : const varName = require("./moduleName) // if userDefined module -> './' shows current directory

- Export : there are two ways to export any function 
    - exports.module = {funName1 : fun1,funName2 : fun2}
    - exports.funName = () =>{}  //by creating a anonymus function and exporting it

## File Handling ( FS Module )

- File handling is used to perform operations on file in js
- It use FS module 
- "const fs = require('fs');"
- FS has two type of functions : 
    - Sync - syncronus : 
        ( functions which run first and then pass control to the next line)
    - Async - asyncronus:
        ( functions which runs side by side and let the other functions or operations to do thier work )
- common fs functions are : 
    - fs.readFile(fileName,encoding,(err,res)=>{//code}) - used to read the contents of file in async manner
    - fs.readFileSync(fileName,encoding) - used to read contents of file in sync manner
    - fs.writeFile(fileName,content,(err)=>{}) - used to write some data to file in async manner
    - fs.writeFileSync(fileName,content) - used to write or create a file in sync manner
    - fs.cpFile(srcFile,newFile) - used to copy file
    - fs.appendFile(srcFile,dataToAppend) - used to append some data to existing file
    - fs.unlinkSync(fileName) - used to delete file
