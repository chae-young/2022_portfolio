import path from 'path';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
    name: 'word-relay-dev',
    mode: 'development',
    devtool: 'eval',
    resolve: {
      extensions: ['.js', '.jsx', '.tsx', '.ts'],
    },
    entry: {
      app: './client',
    },
    module: {
      rules: [{
          loader: 'babel-loader',
          options: { plugins: ['react-refresh/babel'] },
      }, {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: path.join(__dirname, 'node_modules'),
      }, {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './src/assets/fonts/' //dont actually use these fonts but still need to process them
          }
        }
      ],
    },
    plugins: [
      new ReactRefreshPlugin(),
      new ForkTsCheckerWebpackPlugin()
    ],
    output : {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
      publicPath: '/dist/',
    },
    devServer: {
      port: 8080,
      devMiddleware: { publicPath: '/dist' },
      static: { directory: path.resolve(__dirname) },
      hot: true
    }
  };
  export default config;
