const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.config.common')

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  module: {
      rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
          }
      ]
  }
})