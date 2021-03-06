const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const rulesForJavaScript = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: ['babel-loader']
};

const ruleForTypeScript = {
  test: /\.(ts|tsx)$/,
  exclude: /node_modules/,
  use: ['ts-loader']
};

const ruleForMedia = {
  test: /\.(png|jpe?g|gif|jp2|webp)$/,
  loader: 'file-loader',
  options: {
    name: '[name].[ext]'
  }
};

const ruleforFonts = {
  test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'fonts/'
      }
    }
  ]
};

const ruleForCss = {
  test: /\.(css|scss)$/,
  use: ['style-loader', 'css-loader']
};

const rules = [rulesForJavaScript, ruleForTypeScript, ruleForCss, ruleforFonts, ruleForMedia];

module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === 'production';

  return {
    entry: './src/index.tsx',
    output: {
      filename: isProduction ? '[name].[contenthash].js' : 'main.js',
      path: path.resolve(__dirname, 'build'),
      publicPath: 'auto'
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html')
      }),
      new CopyPlugin({
        patterns: [{ from: 'public/**/*' }]
      })
    ],
    devtool: 'source-map',
    module: {
      rules
    },
    devServer: {
      historyApiFallback: true,
      port: 3000
    }
  };
};
