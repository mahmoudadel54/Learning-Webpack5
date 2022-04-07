const path = require("path");
/**
 * 1st way to prevent duplication: shared approach
*/
// module.exports = {
//   mode: "development",
//   entry: {
//     index: {
//       import: "./src/index.js",
//       dependOn: "shared",
//     },
//     other: {
//       import: "./src/other/other.js",
//       dependOn: "shared",
//     },
//     shared: "lodash",
//   },
//   output: {
//     filename: "[name].bundle.js", //[name] points to filename in that existing in entry
//     path: path.resolve(__dirname, "dist"),
//   },
// };

//2nd appraoch: SplitChunckPlugin appraoch
const path = require("path");
module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    other: "./src/other/other.js"
  },
  optimization:{
    splitChunks:{
      chunks:'all'
    }
  },
  output: {
    filename: "[name].bundle.js", //[name] points to filename in that existing in entry
    path: path.resolve(__dirname, "dist"),
  },
};
