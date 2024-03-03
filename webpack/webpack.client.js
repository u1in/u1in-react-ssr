const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const config = require("config");

const smp = new SpeedMeasurePlugin();

const webpackConfig = {
  entry: {
    index: path.resolve(__dirname, "../src/index.jsx"),
  },
  output: {
    path: path.resolve(__dirname, "../build/client"),
    filename: "js/[name]-[hash].js",
    clean: true,
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
      //css处理
      {
        test: /\.css$/,
        use: ["thread-loader", "style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new WebpackManifestPlugin({ publicPath: "" }),
    new webpack.DefinePlugin({
      CONFIG: JSON.stringify(config),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "**/*",
          to: path.resolve(__dirname, "../build/client/"),
          context: path.resolve(__dirname, "../public/")
        },
      ],
    }),
  ],
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
