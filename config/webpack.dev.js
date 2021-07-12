const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  output: {
    filename: "js/[name].[hash].bundle.js",
    path: path.resolve(__dirname, "../docs"),
  },
  mode: "development",
  devtool: "cheap-source-map",
  devServer: {
    contentBase: path.join(__dirname, "./docs"),
    port: 3000,
    hot: true,
    open: true,
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
});
