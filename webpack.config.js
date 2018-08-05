const path = require('path')
const fs = require('fs')
const changeCase = require('change-case')

const RenameWebpackPlugin = require('@panhezeng/rename-webpack-plugin')
const entry = {}
const externals = ['moment', 'xss']
try {
  const files = fs.readdirSync(path.join(__dirname, 'src'))
  files.forEach(function (fileName) {
    const name = fileName.replace('.js', '')
    externals.push(`./${name}`)
    const camelCase = changeCase.camelCase(name)
    entry[camelCase] = `./src/${fileName}`

  })
} catch (e) {
  return console.log('Unable to scan directory src: ' + e)
}

module.exports = {
  entry: entry,
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    library: '[name]'
  },
  externals: externals,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new RenameWebpackPlugin({naming: 'paramCase'})
  ],
  resolve: {
    extensions: ['.js']
  }
}



