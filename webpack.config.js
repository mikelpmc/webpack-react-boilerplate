require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: ''
  },
  devtool: '#cheap-module-inline-source-map',
  module: {
    rules: [
      {
        test: /(\.js|jsx)$/,
        exclude: /(node_modules|build)/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    port: 3000,
    stats: { colors: true },
    inline: true
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false
    })
  ]
};
