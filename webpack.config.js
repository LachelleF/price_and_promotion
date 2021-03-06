
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/public/index.html',
  filename: 'index.html',
  inject: 'body'
});


module.exports = {
  entry: "./client/index.jsx",
  output: {
    path: path.resolve(__dirname, "public/"),
    publicPath: '/',
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};