const path = require("path");
const webpack = require("webpack");
const config = require("config");

const webpackConfig = {
  cache: {
    type: "filesystem",
    allowCollectingMemory: true,
  },
  resolve: {
    extensions: [".jsx", ".js"],
    alias: {
      "@root": path.resolve(__dirname, "../"),
      "@src": path.resolve(__dirname, "../src"),
      "@utils": path.resolve(__dirname, "../utils"),
      "@routes": path.resolve(__dirname, "../routes"),
      "@common": path.resolve(__dirname, "../common"),
      "@images": path.resolve(__dirname, "../src/images"),
    },
  },
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
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext][query]",
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
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
