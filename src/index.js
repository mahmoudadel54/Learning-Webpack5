//1- how webpack read modules imports ? 
/*The dependency module can be from the application code or a third-party library. 
*The resolver helps webpack find the module code that needs to be included in
* the bundle for every such require/import statement. 
*webpack uses enhanced-resolve to resolve file paths while bundling modules.*/

//2- so if I make install for express npm packages, and I made import or it like
/**
 * const express = require('express') ====> means const express = require('node_modules/express')
 * so the default folder resolver lib watches for import modules by its name ==> node_modules
 */

//3- if I have my modules and want to import them by its name
/**
 * I have to create webpack.config file and config resolve path to watch on it
 */
//import package with name 
const mod = require('mod');

mod.log("Hello webpack 5")