const path = require('path');
module.exports={
    mode:'development',
    entry:{
        index:"./src/index.js",
        other:"./src/other/other.js"
    },
    output:{
    filename:"[name].bundle.js",            //[name] points to filename in that existing in entry
    path:path.resolve(__dirname, 'dist')
    }
}