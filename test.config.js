const webpack = require('webpack')

module.exports = {
  entry: './test/index.loader.js',
  output: {
    path: __dirname,
    filename: './test/bundle.js'
  },
  module: {
    // Handle an issue with a require(expr) in colors.js
    exprContextRegExp: /$^/,
    exprContextCritical: false,

    loaders: [
    { 
      test: /\.jsx?$/, 
      exclude: /node_modules/, 
      loader: 'babel-loader' 
    },
    // Needed to make Cheerio happy (Enzyme dependency)
    { 
      test: /\.json$/, 
      loader: 'json-loader' 
    }
    ]
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new webpack.IgnorePlugin(/react\/addons/),
    new webpack.IgnorePlugin(/react\/lib\/ReactContext/),
    new webpack.IgnorePlugin(/react\/lib\/ExecutionEnvironment/)
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  }
}
