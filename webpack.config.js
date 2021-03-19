const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = (env) => {
 const cssExtractPlugin = new MiniCssExtractPlugin({
  filename: "style.css"
 })

 return ({
  mode: env.production ? "production": "development",
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
     MiniCssExtractPlugin.loader,{
      loader: "css-loader",
      options: {
       sourceMap: true
      }
     }, {
      loader: "sass-loader",
      options: {
       sourceMap: true
      }
     }
    ]
   }]
  },
  plugins: [
   cssExtractPlugin
  ],
  devtool: env.production ? "source-map" : "inline-source-map",
  devServer: {
   contentBase: path.join(__dirname, "public"),
   compress: true,
   port: 8080,
   historyApiFallback: true
  }
 })
}