const HtmlPlugin = require('html-webpack-plugin')

const {WEBPACK_SERVE} = process.env
const isDev = Boolean(WEBPACK_SERVE)

module.exports = {
  entry: `${__dirname}/src`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/',
  },
  plugins: [
    new HtmlPlugin({
      favicon: `${__dirname}/assets/favicon.ico`,
      template: 'src/index.html'
    }),
    new HtmlPlugin({
      template: `${__dirname}/src/_redirects`,
      filename: '_redirects',
      inject: false,
    }),
    new HtmlPlugin({
      template: `${__dirname}/src/rss.tsx`,
      filename: 'rss.xml',
      inject: false,
    }),
  ],
  devtool: 'source-map',
  mode: 'development',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader?cacheDirectory',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-modules-typescript-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: isDev ? '[local]-[hash:base64:6]' : '[hash:base64:6]',
              },
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.(jpg|eot|otf|svg|ttf|woff|woff2|gif)$/,
        use: 'file-loader',
      },
    ],
  },
  devServer: {
    clientLogLevel: 'warn',
    historyApiFallback: true,
    open: true,
  },
}
