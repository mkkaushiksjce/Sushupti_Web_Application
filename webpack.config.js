const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const banner = '' + Date.now();
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    polyfill: 'babel-polyfill',
    bundle: "./index.jsx"
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "[name].js"
  },
  module: {
    noParse: /node_modules\/localforage\/dist\/localforage.js/,
    loaders: [
      {
         test: /\.jsx?$/,
         loader: 'babel',
         exclude: /node_modules/,
         query: {
           cacheDirectory: true,
           presets: ['react', 'es2015']
         }
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel-loader']
      },

      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader/webpack', 'babel']
      },

      /* Style loader **/
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },

      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url?limit=10000!img?progressive=true' },

      /* Font Files **/
      {
          test: /\.(woff|woff2|eot|ttf|svg|otf)(\?\S*)?$/,
          exclude: /node_modules/,
          loader: 'url-loader?limit=1024&name=[path][name].[ext]'
      },
      /* Icomoon Icons **/
      { test: /\icomoon.woff$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\icomoon.ttf$/,  loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
      { test: /\icomoon.svg$/,  loader: "url-loader?limit=10000&mimetype=image/svg+xml" }
    ],
  },
  postcss: [ autoprefixer({ browsers: ['last 3 versions', '> 1%'] }) ],

  plugins: [
    new webpack.BannerPlugin(banner),
    new ExtractTextPlugin("style.css"),
  ],
  devtool: 'eval',
  resolve: {
    extensions: ['', '.jsx', '.js'],
  },
  debug: true,
  devServer: {
    stats: 'warnings-only',
    historyApiFallback: true
  }
};

// "style-loader!css-loader?localIdentName=[path][name]__[hash:base64:5]__[local]!less-loader
