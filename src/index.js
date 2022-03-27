import Img from './assets/routing app.jpeg';
console.log(123);
var name = "asdad"
let btn = document.getElementById("btn");
btn.addEventListener("click",()=>console.log("Hello Webpack"))

//if there is no config file and handle images with some loader -> gives an error in running webpack
let imgTag = document.createElement('img');
imgTag.src=`${Img}`;            
console.log(imgTag);
/**
 * ERROR in ./src/assets/routing app.jpeg 1:0
Module parse failed: Unexpected character '�' (1:0)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
(Source code omitted for this binary file)
 @ ./src/index.js 1:0-44 9:14-17

webpack 5.49.0 compiled with 1 error and 1 warning in 462 ms
 */