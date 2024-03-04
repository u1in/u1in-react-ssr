const path = require("path");

const webpackConfig = {
  stats: "errors-only",
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
};

module.exports = webpackConfig;
