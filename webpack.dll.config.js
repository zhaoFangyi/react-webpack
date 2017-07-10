const path = require('path')
const webpack = require('webpack')

const ROOT_PATH = path.resolve(__dirname);

const vendors = [
  'react',
  'react-dom',
  'react-redux',
  'react-router',
  'react-router-redux',
  'redux',
  'redux-actions',
];

module.exports = {
  entry: {
    vendor: vendors
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].dll.js',
    library: '[name]_lib',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(ROOT_PATH, 'lib', 'manifest.json'),
      name: '[name]_lib',
      context: ROOT_PATH,
    }),
  ],
}