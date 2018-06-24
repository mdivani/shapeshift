const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
  
    return {
      entry: {
        index: ['babel-polyfill','./src/app.js']
      },
      output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].bundle.js'
      },
      optimization: {
        splitChunks: {
        chunks: 'all'
        }
      },
      module: {
        rules: [{
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        }, {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        }]
      },
      plugins: [
        CSSExtract,
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
          title: 'caching'
        })
      ],
      devtool: isProduction ? 'source-map' : 'inline-source-map',
      devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        publicPath: '/dist/'
      }
    };
  };