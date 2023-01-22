import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { css, html, image, scss, ts_js } from '../rules';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const common: Configuration = {
  entry: './src/index.ts',
  module: {
    rules: [ts_js, html, css, scss, image]
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, '../../src')
    },
    extensions: ['.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new ForkTsCheckerWebpackPlugin({ async: false })
  ]
};

export default common;
