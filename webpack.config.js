/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const fs = require('fs');

const getPublicUrlOrPath = require('react-dev-utils/getPublicUrlOrPath');

const isDevelopment = process.env.NODE_ENV !== 'production';

const appDirectory = fs.realpathSync(process.cwd());

const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const appHtml = resolveApp('public/index.html');

const publicUrlOrPath = getPublicUrlOrPath(
  process.env.NODE_ENV === 'development',
  require(resolveApp('package.json')).homepage,
  process.env.PUBLIC_URL,
);

//  const getStyleLoaders = (cssOptions, preProcessor) => {
//    const loaders = [
//      isEnvDevelopment && require.resolve('style-loader'),
//      isEnvProduction && {
//        loader: MiniCssExtractPlugin.loader,
//        // css is located in `static/css`, use '../../' to locate index.html folder
//        // in production `paths.publicUrlOrPath` can be a relative path
//        options: paths.publicUrlOrPath.startsWith('.') ? { publicPath: '../../' } : {},
//      },
//      {
//        loader: require.resolve('css-loader'),
//        options: cssOptions,
//      },
//      {
//        // Options for PostCSS as we reference these options twice
//        // Adds vendor prefixing based on your specified browser support in
//        // package.json
//        loader: require.resolve('postcss-loader'),
//        options: {
//          postcssOptions: {
//            // Necessary for external CSS imports to work
//            // https://github.com/facebook/create-react-app/issues/2677
//            ident: 'postcss',
//            config: false,
//            plugins: [
//              'postcss-flexbugs-fixes',
//              [
//                'postcss-preset-env',
//                {
//                  autoprefixer: {
//                    flexbox: 'no-2009',
//                  },
//                  stage: 3,
//                  features: {
//                    'nesting-rules': true,
//                  },
//                },
//              ],
//              // Adds PostCSS Normalize as the reset css with default options,
//              // so that it honors browserslist config in package.json
//              // which in turn let's users customize the target behavior as per their needs.
//              'postcss-normalize',
//              'postcss-nesting',
//            ],
//          },
//          sourceMap: isEnvProduction ? shouldUseSourceMap : isEnvDevelopment,
//        },
//      },
//    ].filter(Boolean);

//    if (preProcessor) {
//      loaders.push(
//        {
//          loader: require.resolve('resolve-url-loader'),
//          options: {
//            sourceMap: isEnvProduction ? shouldUseSourceMap : isEnvDevelopment,
//            root: paths.appSrc,
//          },
//        },
//        {
//          loader: require.resolve(preProcessor),
//          options: {
//            sourceMap: true,
//          },
//        },
//      );
//    }

//    return loaders;
//  };

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.tsx',
    'editor.worker': 'monaco-editor/esm/vs/editor/editor.worker.js',
    'json.worker': 'monaco-editor/esm/vs/language/json/json.worker',
    'css.worker': 'monaco-editor/esm/vs/language/css/css.worker',
    'html.worker': 'monaco-editor/esm/vs/language/html/html.worker',
    'ts.worker': 'monaco-editor/esm/vs/language/typescript/ts.worker',
  },
  devServer: {
    hot: true,
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
  },
  output: {
    globalObject: 'self',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                ['@babel/preset-react', { runtime: 'automatic' }],
              ],
              plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ttf$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(
      Object.assign(
        {},
        {
          inject: true,
          template: appHtml,
        },
        !isDevelopment
          ? {
              minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
              },
            }
          : undefined,
      ),
    ),
    // new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
    //   NODE_ENV: process.env.NODE_ENV,
    //   PUBLIC_URL: appHtml + '/public',
    // }),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
};
