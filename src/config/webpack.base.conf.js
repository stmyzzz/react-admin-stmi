const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const packageName = require('../package.json').name
const devMode = process.env.NODE_ENV === 'development'

const resolve = dir => path.resolve(process.cwd(), dir)

module.exports = {
  entry: {
    app: resolve('src/index.tsx')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('public/index.html'),
      filename: 'index.html',
      favicon: 'public/favicon.ico',
      minify: {
        removeAttributeQuotes: true,
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new webpack.ProvidePlugin({
      $request: [resolve('src/utils/request.ts'), 'default'],
      $message: [resolve('node_modules/antd/es/message/index.js'), 'default']
    }),
    new CopyWebpackPlugin([
      {
        from: resolve('static'),
        to: 'static'
      }
    ]),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:6].css',
      chunkFilename: 'css/[name].[contenthash:6].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.jpg|png|gif|jpeg|bmp|svg$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'img/[name]-[hash:6].[ext]'
          }
        },
        exclude: resolve('src/assets/icons')
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
        include: resolve('src/assets/icons')
      },
      {
        test: /\.ttf|eot|woff|woff2$/,
        use: 'url-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          devMode
            ? 'style-loader'
            : {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '../'
                }
              },
          'css-loader',
          {
            loader: 'less-loader',
            options: { javascriptEnabled: true }
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                resolve('src/assets/styles/variable.less'),
                resolve('src/assets/styles/mixin.less')
              ]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@': resolve('src')
    },
    extensions: ['.ts', '.tsx', '.js', '.json']
  }
}
