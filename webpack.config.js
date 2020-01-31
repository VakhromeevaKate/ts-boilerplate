const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config()
const ENV = process.env.APP_ENV;
const isTest = ENV === 'test'
const isProd = ENV === 'prod';
function setDevTool() {  // function to set dev-tool depending on environment
    if (isTest) {
      return 'inline-source-map';
    } else if (isProd) {
      return 'source-map';
    } else {
      return 'eval-source-map';
    }
}
const config = {
  entry: __dirname + "/src/app/index.ts",
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/' 
  },
  devtool: setDevTool(),
  module: { 
    rules: [ 
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: [
          /node_modules/
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sass|scss)$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html",
      inject: 'body'
    }),
    new webpack.DefinePlugin({  // plugin to define global constants
        API_KEY: JSON.stringify(process.env.API_KEY)
    }),
  ],
  devServer: {
      contentBase: './src/public',
      port: 7700,
  } 
}                                                           
                 
if (isProd) {
    config.plugins.push(
        new UglifyJSPlugin(),
        new CopyWebpackPlugin([{
          from: __dirname + '/src/public'
      }])
    );
}; 
module.exports = config;