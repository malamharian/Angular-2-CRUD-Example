'use strict';

const debug = process.env.NODE_ENV !== 'production';
const HtmlWebpack = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const rootDir = __dirname;

module.exports = {
    devtool: debug ? "inline-source-map" : null,
    entry: {
        app: [
            path.resolve(rootDir, 'src', 'js', 'client')
        ],
        vendor: [
            path.resolve(rootDir, 'src', 'js', 'vendor')
        ]
    },
    module: {
        loaders: [
            {
                test: /\.(css|html)$/,
                loader: 'raw'
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loaders: ['ts']
            }
        ]
    },
    output: {
        path: path.resolve(rootDir, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            filename: 'vendor.bundle.js',
            minChunks: Infinity,
            name: 'vendor'
        }),
        new HtmlWebpack({
            filename: 'index.html',
            inject: 'body',
            template: path.resolve(rootDir, 'src', 'index.html')
        })
    ],
    devServer: {
        contentBase: path.resolve(rootDir, 'dist'),
        port: 8080
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    }
};