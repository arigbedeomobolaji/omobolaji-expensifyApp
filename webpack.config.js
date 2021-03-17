const path = require("path")

module.exports = {
 mode: "development",
 entry: {
  app: path.join(__dirname, "src/app.js")
 },
 output: {
  path: path.join(__dirname, "public"),
  filename: "app.bundle.js"
 },
 module: {
  rules: [{
   test: /\.js$/,
   exclude: /node-modules/,
   use: "babel-loader"
  },
  {
   test: /\.s?css$/,
   use: [
    "style-loader",
    "css-loader",
    "sass-loader"
   ]
  }]
 },
 devtool: "eval-cheap-module-source-map",
 devServer: {
  contentBase: path.join(__dirname, "public"),
  compress: true,
  port: 8080,
  historyApiFallback: true
 }
}