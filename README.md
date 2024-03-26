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
