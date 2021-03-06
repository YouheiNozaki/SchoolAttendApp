const path = require('path');
const GasPlugin = require('gas-webpack-plugin');

// serverをbuildする設定。現在は使用していません。
module.exports = {
  mode: 'development',
  context: __dirname,
  entry: {
    main: path.resolve(__dirname, 'src', 'server/index.ts'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [new GasPlugin()],
};
