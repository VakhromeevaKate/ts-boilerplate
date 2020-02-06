const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
require('dotenv').config();
const ENV = process.env.APP_ENV;
const isDev = ENV === 'development';
const isProd = ENV === 'production';

function setDevTool() {
    if (isDev) {
      return 'inline-source-map';
    } else if (isProd) {
      return 'source-map';
    } else {
      return 'eval-source-map';
    }
}

const config = {
  mode: ENV,
  entry: __dirname + "/src/app/index.ts",
  output: {
    path: __dirname + '/dist',
    filename: 'build.js',
    publicPath: ''
  },
  devtool: setDevTool(),
  module: {
    rules: [

      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader',
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
            js: 'babel-loader',
            ts: 'ts-loader'
          },
          esModule: true
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [
          /node_modules/
        ]
      },
      {
        test: /\.css$/,
        loader: "css-loader"
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.(png|jpg|gif|svg|ico|jpeg)$/,
        loader: 'file-loader',
        options: {
          name: '/assets/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "resolve-url-loader",
          "sass-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.vue', '.json' ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    contentBase: './src',
    port: 7700
  },
  performance: {
    hints: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html",
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
      chunkFilename: '[id].css',
    }),
    new webpack.DefinePlugin({
        API_KEY: JSON.stringify(process.env.API_KEY)
    }),
    new VueLoaderPlugin()
  ],
};

if (isProd) {
    config.plugins.push(
        new UglifyJSPlugin(),
        new CopyWebpackPlugin([{
          from: __dirname + '/src'
      }])
    );
}

module.exports = config;
