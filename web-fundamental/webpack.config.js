const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './build-babel/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
