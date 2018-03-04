var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
        "microview.js" :[
            path.resolve(__dirname, 'src/App.js'),
            path.resolve(__dirname, 'src/Widget.js')
        ],

    },
    output: {
        filename: "microview.js",
        path: __dirname + '/dist/'
    },
    module: {
        loaders: [
          {
              test: /\.js?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
              query: {
                  presets: ['es2015']
              }
          }
        ]
    },
    plugins: [
        new webpack.IgnorePlugin(/locale/, /moment$/)
    ]
};