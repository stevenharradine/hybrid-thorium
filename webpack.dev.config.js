var webpack = require("webpack");
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'PreThorium',
        libraryTarget: 'umd'
    },
    module: {
        preLoaders: [{
            test: /\.vue$/,
            loader: 'eslint',
            exclude: /node_modules/
        }, {
            test: /\.js$/,
            loader: 'eslint',
            exclude: /node_modules/
        }],
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style", "css-loader!sass-loader")
        }]
    },
    vue: {
        loaders: {
            js: 'babel',
            css: ExtractTextPlugin.extract("css"),
            sass: ExtractTextPlugin.extract("css!sass")
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, './node_modules')]
    },
    plugins: [
        new webpack.EnvironmentPlugin([
            "NODE_ENV"
        ]),
        new webpack.optimize.OccurenceOrderPlugin(),
        new ExtractTextPlugin("[name].css"),

    ],
    devtool: 'source-map'
};
