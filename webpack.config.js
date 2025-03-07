const path = require("path");

module.exports = {
  entry: path.join(__dirname, "./client/index.js"),
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "main.js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        use: {
          loader: "url-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
