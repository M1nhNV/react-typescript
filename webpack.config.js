const path = require('path')
const outputDirectory = 'public'

module.exports = {
  entry: ['./src/index.tsx'],
  module: {
    rules: [
      {
        test: '/\.tsx?$/',
        use: 'ts-loader',
        exclude: '/node_modules/'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: './js/[name].bundle.js'
  },
  devtool: 'inline-source-map'
}
