import * as webpack from "webpack";
import HtmlWebPackPlugin from "html-webpack-plugin";
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html"
});

const config: webpack.Configuration = {
  mode: "development",
  entry: "./src/index.tsx",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { 
        test: /\.tsx?$/, 
        use: [
          {
            options: {
              useTranspileModule: true,
              forceIsolatedModules: true,
              useCache: true,
              useBabel: true,
              babelOptions: {
                babelrc: false /* Important line */,
              },
              reportFiles: ['src/**/*.{ts,tsx}'],
              babelCore: '@babel/core'
            },
            loader: 'awesome-typescript-loader'
          }
        ],
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader'
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: 'compressed',
              },
              implementation: require('sass'),
              sourceMap: true
            },
          },
        ],
      },
    ],
  },
  plugins: [htmlPlugin]
};

export default config;