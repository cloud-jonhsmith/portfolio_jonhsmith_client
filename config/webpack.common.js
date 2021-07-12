const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const rootPath = path.join(__dirname, "../../portfolio_jonhsmith_client");

module.exports = {
  entry: {
    app: path.join(rootPath, "src/index.js"),
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx"],
        },
      },
      {
        test: /\.(jpg|png|jpeg|svg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[contenthash].[ext]",
              outputPath: "img/",
              useRelativePath: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Portfolio Jonhsmith Germán Córdova Zúñiga",
      description: "In this place you can get to know me a little more",
      filename: path.join(rootPath, "docs/index.html"),
      template: path.join(rootPath, "public/index.html"),
    }),
    new CleanWebpackPlugin(),
  ],
};
