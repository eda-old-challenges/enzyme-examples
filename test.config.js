const webpack = require('webpack')

module.exports = {
  entry: './test/index.loader.js',
  output: {
    path: __dirname,
    filename: './test/bundle.js'
  },
  externals: {
    cheerio: "window"
  },
  module: {
    // Handle an issue with a require(expr) in colors.js
    exprContextRegExp: /$^/,
    exprContextCritical: false,

    loaders: [
    { 
      test: /\.jsx?$/, 
      exclude: /node_modules/, 
      loader: 'babel-loader', 
      query: { 
        presets: ['react', 'es2015'] 
      } 
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
    extensions: ['', '.js', '.jsx']
  }
}
