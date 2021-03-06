/* jshint node: true */
var path = require('path');

module.exports = {
  entry: './lib/index.jsx',

  output: {
    filename: './react-atellier.js',
    libraryTarget: 'umd',
    library: 'ReactAtellier'
  },

  // devtool: '#inline-source-map',

  externals: {
   'react': 'var React',
   'react/addons': 'var React'
  },

  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: 'style!css!less?outputStyle=expanded&' +
          'includePaths[]=' + (path.resolve(__dirname, './bower_components')) + '&' +
          'includePaths[]=' + (path.resolve(__dirname, './node_modules'))
      },
      {
        test: /\.less$/,
        loader: 'autoprefixer'
      },
      {
        test: /\.(otf|ttf|png)$/,
        loader: 'file'
      },
      {
        test: /(\.jsx?)$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};
