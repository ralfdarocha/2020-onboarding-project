import * as path from "path";
import * as webpack from "webpack";
import devConfig from "./webpack.dev";

const config: webpack.Configuration = {
    ...devConfig,
    mode: "production",
    entry: "./src/reactstone-app.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "reactstone.js",
      libraryTarget: 'amd'
    },
    module: {
      rules: [
        ...devConfig.module.rules.slice(0,-1),
        {
          test: /\.s[ac]ss$/i,
          use: [
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  outputStyle: 'compressed',
                },
                implementation: require('sass'),
              },
            },
          ],
        },
      ],
    },
}

export default config;