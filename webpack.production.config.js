const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const banner = '' + Date.now();
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    bundle: "./index.jsx"
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js"
  },
  module: {
    loaders: [{
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel-loader']
      },
      /* Style loader **/
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader/webpack', 'babel']
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url?limit=10000!img?progressive=true'
      },

      /* Font Files **/
      {
        test: /\.(woff|woff2|eot|ttf|svg|otf)(\?\S*)?$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=1024&name=[path][name].[ext]'
      },
      /* Icomoon Icons **/
      {
        test: /\icomoon.woff$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"
      },
      {
        test: /\icomoon.ttf$/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream&name=[path][name].[ext]"
      },
      {
        test: /\icomoon.svg$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml&name=[path][name].[ext]"
      }

    ],
  },
  // postcss: [ autoprefixer({ browsers: ['last 3 versions', '> 1%'] }) ],
  plugins: [
    new webpack.BannerPlugin(banner),
    new ExtractTextPlugin("style.css"),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    stats: 'errors-only',
  }
};

// "style-loader!css-loader?localIdentName=[path][name]__[hash:base64:5]__[local]!less-loader
