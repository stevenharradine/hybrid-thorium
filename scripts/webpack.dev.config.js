var webpack = require('webpack');
var path = require('path');
var bourbon = require('node-bourbon').includePaths;

module.exports = {
    entry: {
        app: path.resolve(__dirname, '../dev/src/main.js'),
        vendor: ['vue']
    },
    output: {
        path: path.resolve(__dirname, '../dev/app'),
        publicPath: '/dev/app/',
        filename: 'app.js'
    },
    sassLoader: {
      includePaths: [bourbon]
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
            exclude: /node_modules/,
            query: {
                presets: ['es2015'],
                plugins: ['transform-runtime']
            }
        }, {
            test: /.*\.(gif|png|jpe?g|svg)$/i,
            loader: 'file'
        }, {
            test: /\.vue$/,
            loader: 'vue'
        }]
    },
    vue: {
        loaders: {
            js: 'babel',
            html: 'vue-html?removeRedundantAttributes=false'
        }
    },
    resolve: {
        alias: {
            'hybrid-thorium': path.resolve(__dirname, '..'),
            views: path.resolve(__dirname, '../dev/src/views')
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, './node_modules')]
    },
    plugins: [
        new webpack.ProvidePlugin({
            Promise: 'exports?global.Promise!es6-promise',
            fetch: 'exports?self.fetch!whatwg-fetch'
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vue.js')
    ],
    devtool: '#inline-source-map'
};
