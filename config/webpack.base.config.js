/* eslint-disable import/no-extraneous-dependencies, global-require */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

// Plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, '../src');

module.exports = (env) => {
  let sourcemap;

  const nodeEnv = process.env.NODE_ENV || 'development';
  if (nodeEnv === 'development' || nodeEnv === 'test') {
    require('dotenv').config({ path: path.join(__dirname, '..', '.env.dev') });
    sourcemap = 'cheap-module-eval-source-map';
  } else if (nodeEnv === 'production') {
    sourcemap = 'nosources-source-map';
  }

  return merge([
    {
      entry: ['@babel/polyfill', APP_DIR],
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          },
          {
            test: /\.s?css$/,
            // Read from right to left. sass-loader to parse scss,
            // css-loader to convert sass into CSS, style-loader injects the CSS into index.html
            use: [
              nodeEnv === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
              'css-loader',
              'sass-loader'
            ]
          },
          {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192
                }
              }
            ]
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: './index.html'
        }),
        // Create global constants which are configured at compile time
        new webpack.DefinePlugin({
          'process.env.WHATEVER': JSON.stringify("whatever")
        })
      ],
      devtool: sourcemap
    }
  ]);
};
