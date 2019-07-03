const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin').CleanWebpackPlugin
const UglifyPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    parallaxing: './src/parallaxing.js',
    'parallaxing.min': './src/parallaxing.js',
    index: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: 'parallaxing',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyPlugin({
        include: /\.min\.js$/
      })
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    host: '0.0.0.0',
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new CleanPlugin(),
    new HtmlPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
}