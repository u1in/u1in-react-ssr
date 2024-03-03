const path = require("path");
const webpackBaseConfig = require("./webpack.base");
const { merge } = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");

const webpackConfig = {
  entry: {
    server: path.resolve(__dirname, "../server.js"),
  },
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "node.js",
  },
  target: "node",
  externalsPresets: { node: true },
  externals: [nodeExternals()],
};

module.exports = merge(webpackBaseConfig, webpackConfig);
