const path = require("path");
const webpackBaseConfig = require("./webpack.base");
const { merge } = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const CopyPlugin = require("copy-webpack-plugin");

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
  plugins: [
    new WebpackManifestPlugin({
      publicPath: "",
      filter: (file) => {
        return !["favicon.ico"].includes(file.name);
      },
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "**/*",
          to: path.resolve(__dirname, "../build/client/"),
          context: path.resolve(__dirname, "../public/"),
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

module.exports = merge(webpackBaseConfig, webpackConfig);
