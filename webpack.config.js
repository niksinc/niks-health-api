const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');

const { NODE_ENV = 'production' } = process.env;

module.exports = {
  // devServer: {
  //    headers: {
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  //   "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
  //     }
    
  // },
  entry: './src/index.ts',
  watch: NODE_ENV === 'development',
  mode: NODE_ENV,
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  externals: [
    nodeExternals(),
    new WebpackShellPlugin({
      onBuildEnd: ['npm run run:dev'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
      },
    ],
  },
};
