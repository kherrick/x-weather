const path = require('path')
var webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, `src${path.sep}main.js`)
  },
  output: {
    path: path.resolve(__dirname, `public`),
    publicPath: './public',
    library: "web-components-starter-container",
    libraryTarget: "umd",
    filename: "web-components-starter-container.js",
    auxiliaryComment: "Web Components Starter Container"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new UglifyJsPlugin()
  ]
}
