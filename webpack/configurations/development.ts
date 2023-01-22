import path from 'path';
import { HotModuleReplacementPlugin } from 'webpack';
import { Configuration } from '../types';
import ESLintPlugin from 'eslint-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';

const development: Configuration = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, './'),
    historyApiFallback: true,
    port: 3000,
    open: true,
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    }
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[chunkhash].bundle.js',
    publicPath: '/'
  },

  plugins: [
    new ESLintPlugin({ extensions: ['ts', 'js'], fix: true }),
    new StyleLintPlugin({ extensions: ['scss'], fix: true })
  ]
};

export default development;
