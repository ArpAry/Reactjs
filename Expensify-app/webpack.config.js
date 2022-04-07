const path = require("path");
const {Cleanwebpackplugin}=require('clean-webpack-plugin');
const Htmlwebpackplugin=require('html-webpack-plugin');

module.exports = { presets: "@babel/preset-env" };
// module.exports={
//   context: __dirname,
//   entry: "./app.js",
//   output: {
//         path: __dirname + "/dist",
//         filename:"bundle.js"
//   }
//}
module.exports = {
  mode: "development",
  entry: "./src/playground/Redux-Expensify.js",

  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  "plugins": ["@babel/plugin-syntax-class-properties"]
               ,

  devtool: "eval-cheap-module-source-map",
  node: { fs: 'empty' },
  devtool: options.devtool,
  target: 'web',
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    // In previous it is Require used search  path

    historyApiFallback: true,
  },
};
