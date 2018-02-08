// TODO this is commented out until a fix for extra-watch-webpack-plugin is published.
//
// Cause Webpack to watch files that are DYNAMICALLY imported by babel plugin `import-all.macro`
// const ExtraWatchWebpackPlugin = require('extra-watch-webpack-plugin');

module.exports = {
  // plugins: [
  //   new ExtraWatchWebpackPlugin({
  //     dirs: ['../src/components/svgs/generated'],
  //     files: [],
  //   }),
  // ],
  module: {
    rules: [
      {
        test: /svgs\/story\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            "cacheDirectory": false
          }
        }
      }
    ]
  }
}
