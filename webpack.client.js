const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const config = require("config");

const smp = new SpeedMeasurePlugin();

const webpackConfig = {
  cache: {
    type: "filesystem",
  },
  entry: {
    index: path.resolve(__dirname, "./index.jsx"),
  },
  output: {
    path: path.resolve(__dirname, "./dist/client"),
    filename: "js/[name]-[hash].js",
    clean: true,
  },
  // devtool: "cheap-module-source-map",
  resolve: {
    extensions: [".jsx", ".js"],
    alias: {
      "@root": path.resolve(__dirname, "./"),
      "@src": path.resolve(__dirname, "./src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["thread-loader", "babel-loader"],
      },
      //css处理
      {
        test: /\.css$/,
        use: [
          "thread-loader",
          "style-loader",
          {
            loader: "css-loader",
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext][query]",
        },
      },
      // { test: /\.json$/, type: "json" },
    ],
  },
  plugins: [new WebpackManifestPlugin({ publicPath: "" })],
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: 4,
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
      }),
    ],
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          name: "vendors",
          priority: 10,
          enforce: true,
        },
      },
    },
  },
};

module.exports = webpackConfig;
