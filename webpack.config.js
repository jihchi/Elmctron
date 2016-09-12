var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    path: './dist',
    filename: 'index.js'
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.elm']
  },

  module: {
    loaders: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        loader: 'elm-hot!elm-webpack',
      },
      {
        test: /\.less$/,
        loader: 'style!css!less',
      },
    ],

    noParse: /\.elm$/
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Elmctron',
    }),
  ],

  devServer: {
    stats: 'errors-only'
  }
};
