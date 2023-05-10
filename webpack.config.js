const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const bodyParser = require('body-parser')

module.exports = {
  // Bundle the JavaScript files
  entry: path.join(__dirname, "src", "index.js"),
  // Defines output path for bundled files, so creates a folder called dist
  output: {
    path:path.resolve(__dirname, "dist"),
  },
  // Defines rules to transpile .js files to make them readable to browsers
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // Defines preset to transpile react code and syntax for ES2015+ JavaScript
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ]
  },
  mode: 'development',
  // Takes /public/index.html and injects script tag onto it, then moves file to dist
  plugins: [
    // Creates an injection to script
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./src", "./index.html"),
      inject: 'body',
    }),
  ],
}