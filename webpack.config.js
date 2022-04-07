const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "index.js", //[name] points to filename in that existing in entry
    path: path.resolve(__dirname, "dist"),
  },
};
