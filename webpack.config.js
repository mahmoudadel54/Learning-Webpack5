const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "index.js", //[name] points to filename in that existing in entry
    path: path.resolve(__dirname, "dist"),
  },
    module: {
    rules: [
      //css rule
      {
        test: /\.css$/i,      //any line in code includes .css will handle it directly via webpack
        use: ['style-loader', 'css-loader'],    
      },
        //images rule
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type:'asset/resource',      //no need to external laoder package, just use built-in type
        },
          //fonts rule
       {
        test: /\.(woff|woff2|eot|tff|otf)$/i,
        type:'asset/resource',      //no need to external laoder package, just use built-in type
      },
    ],
  },
};
