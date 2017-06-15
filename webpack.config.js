const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (() => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    })
  ];

  if (process.env.NODE_ENV === 'production') {
    plugins.unshift(
      // TODO: these plugins are removed from webpack, need new libs
      // new webpack.optimize.DedupePlugin(),
      // new webpack.optimize.UglifyJsPlugin({
      //   sourcemap: false,
      //   comments: false,
      //   compress: {
      //     warnings: false
      //   }
      // })
    );
  } else {
    plugins.unshift(new webpack.HotModuleReplacementPlugin());
  }

  return {
    devtool: 'source-map',
    devServer: {
      contentBase: path.join(__dirname, './dist'),
      compress: true,
      hot: true,
      port: 3000
    },
    entry: [
      './src/app'
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'app.js'
    },
    plugins,
    module: {
      rules: [{
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      }, {
        test: /\.s?css$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.join(__dirname, 'src')
      }, {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader',
        include: path.join(__dirname, 'src')
      }]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    }
  };
});
