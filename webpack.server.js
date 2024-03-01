const path = require("path");
const nodeExternals = require("webpack-node-externals");


const webpackConfig = {
  entry: {
    server: path.resolve(__dirname, "./server.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "node.js",
  },
  resolve: {
    extensions: [".jsx", ".js"],
    alias: {
      "@root": path.resolve(__dirname, "./"),
      "@src": path.resolve(__dirname, "./src"),
    },
  },
  target: "node",
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["thread-loader", "babel-loader"],
      },
      // { test: /\.json$/, type: "json" },
    ],
  },
};

module.exports = webpackConfig;
