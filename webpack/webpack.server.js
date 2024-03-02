const path = require("path");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");
const config = require("config");

const webpackConfig = {
  entry: {
    server: path.resolve(__dirname, "../server.js"),
  },
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "node.js",
  },
  resolve: {
    extensions: [".jsx", ".js"],
    alias: {
      "@root": path.resolve(__dirname, "../"),
      "@src": path.resolve(__dirname, "../src"),
      "@utils": path.resolve(__dirname, "../utils"),
      "@routes": path.resolve(__dirname, "../routes"),
      "@common": path.resolve(__dirname, "../common"),
    },
  },
  target: "node",
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          "thread-loader",
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              sourceType: "unambiguous",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      CONFIG: JSON.stringify(config),
    }),
  ],
};

module.exports = webpackConfig;
