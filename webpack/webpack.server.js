const path = require("path");
const webpackBaseConfig = require("./webpack.base");
const { merge } = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");
const config = require("config");

const webpackConfig = {
  cache: {
    type: "filesystem",
    allowCollectingMemory: true,
    cacheDirectory: path.resolve(
      __dirname,
      "../node_modules/.temp_cache/server"
    ),
  },
  entry: {
    server: path.resolve(__dirname, "../server.js"),
  },
  output: {
    path: path.resolve(__dirname, "../build/server"),
    filename: "node.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          "thread-loader",
          "style-loader",
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
    ],
  },
  target: "node",
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  plugins: [
    new webpack.DefinePlugin({
      CONFIG: JSON.stringify(config),
      IS_SERVER: true,
    }),
  ],
};

module.exports = merge(webpackBaseConfig, webpackConfig);
