const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const rulesForJavaScript = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: ["babel-loader"],
};

const ruleForTypeScript = {
  test: /\.(ts|tsx)$/,
  exclude: /node_modules/,
  use: ["ts-loader"],
};

const ruleForMedia = {
  test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
  use: ["file-loader"],
};

const ruleForCss = {
  test: /\.(css|scss)$/,
  use: ["style-loader", "css-loader"],
};

const rules = [rulesForJavaScript, ruleForTypeScript, ruleForCss];

module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === "production";

  return {
    entry: "./src/index.tsx",
    output: {
      filename: isProduction ? "[name].[contenthash].js" : "main.js",
      path: path.resolve(__dirname, "build"),
      publicPath: "/",
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "src", "index.html"),
      }),
    ],
    module: {
      rules,
    },
  };
};
