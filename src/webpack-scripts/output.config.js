const SASS_LOADER = require('sass-loader');
const APP = require('app-config');


const config = {

  entry: [
'./src/main.js',
'./src/app.js'
],
  output: {
path: './out',
filename: 'bundle.js',
},

  module: {
    rules: [
      {
        test: /.scss/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  }

}

module.exports = config;
