const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    client: path.resolve(__dirname, './client/index.tsx'),
    // server: path.resolve(__dirname, './server/index.ts'),
  },
  // mode: 'development',
  output: {
    // path: path.resolve(__dirname, 'build', 'client'),
    // filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
    publicPath: '/',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      // {
      //   test: /\.(ts|tsx)$/,
      //   // loader: 'awesome-typescript-loader',
      //   use: 'ts-loader',
      // },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)/,
        // type: 'asset/resource',

        type: 'asset/inline',
      },
      // {
      //   test: /\.(jpg|jpeg|png|gif|mp3|svg)$/i,
      //   use: ['file-loader'],
      //   options: {
      //     name: '[path][name].[ext]',
      //   },
      // },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'build', 'client'),
    compress: true,
    port: 5050,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './client', 'index.html'),
    }),
  ],
}
