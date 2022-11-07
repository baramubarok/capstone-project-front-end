const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = (env, argv) => {
  return {
    entry: "./src/script/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "main.js",
    },
    mode: "production",

    devServer: {
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
      },
    },

    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
            },
          ],
        },

        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images",
          },
        },
      ],
    },

    plugins: [
      /* HTML Webpack Plugin */
      new HtmlWebpackPlugin({
        template: "./src/main.html",
        filename: "index.html",
      }),
      new Dotenv({
        path: `./.env`,
      }),
    ],
  };
};
