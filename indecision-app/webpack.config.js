// //entry output
const path = require("path");
//console.log(__dirname);
//console.log("bhdfjh");
// module.exports = {
//   presets: [
//     ['@babel/preset-env', {targets: {node: 'current'}}],
// +    '@babel/preset-typescript',
//   ],
// };
// module.exports = {
//   "presets": [['@babel/preset-env', {targets: {node: 'current'}}]],
// };
module.exports = {
  
  mode: "development",
  entry: "./src/app.js",

  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js",
  },


  module: {
        //   presets: [
        //     ['@babel/preset-env', {targets: {node: 'current'}}],
        // +    '@babel/preset-typescript',
        //   ],
         rules: [
           {
             loader: "babel-loader",
             test: /\.js$/,
             exclude: /node_modules/,
           },
         ],
       },
 
  devtool: "eval-cheap-module-source-map",
  devServer: {
    static: {
         directory: path.join(__dirname, 'public')
    }
}
  
};
// module.exports='hello world';
// const path = require('path');


//   devServer: {
//     static: {
//       directory: path.join(__dirname, 'public'),
//     },
//   },};