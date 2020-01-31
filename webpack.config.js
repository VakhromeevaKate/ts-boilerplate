const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
require('dotenv').config();
const ENV = process.env.APP_ENV;
const isDev = ENV === 'development';
const isProd = ENV === 'production';

function setDevTool() {  // function to set dev-tool depending on environment
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
  entry: __dirname + "/src/app/index.js",
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
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', 'latest' ],
            plugins: [ "@babel/plugin-transform-async-to-generator" ]
          }
        },
        exclude: [
          /node_modules/
        ]
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
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(sass|scss)$/,
        use: [{
            loader: "vue-style-loader"
        }, {
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
    extensions: [ '.tsx', '.ts', '.js', '.vue', '.json' ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    contentBase: './src/public',
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
    new webpack.DefinePlugin({  // plugin to define global constants
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
