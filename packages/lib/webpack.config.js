const path = require('path');
const fs = require('fs');
const changeCase = require('change-case');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const RenameWebpackPlugin = require('@panhezeng/rename-webpack-plugin');
const entry = {};
try {
  const files = fs.readdirSync(path.join(__dirname, 'src'));
  files.forEach(function (fileName) {
    const name = fileName.replace('.ts', '');
    const camelCase = changeCase.camelCase(name);
    entry[camelCase] = `./src/${fileName}`;
  });
} catch (e) {
  return console.log('Unable to scan directory src: ' + e);
}

module.exports = {
  entry,
  output: {
    clean: true,
    filename: '[name].js',
    libraryExport: 'default',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    library: '[name]',
  },
  module: {
    rules: [
      { test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new RenameWebpackPlugin({ naming: 'paramCase' }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
};
