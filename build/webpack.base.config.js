/**
 * Created by Ysssssss on 19/4/15.
 */
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: [
            'babel-polyfill',
            path.resolve(__dirname, '../src/index.js')
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name]-[hash].js',
        publicPath: '/',
        chunkFilename: '[name].[chunkhash].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader?cacheDirectory'
            },
            {
                test: /\.(sass|scss)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", 'postcss-loader', {
                    loader: "less-loader",
                    options: {
                        javascriptEnabled: true
                    }
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"],
        extensions: ['.js','.jsx','.scss','.less','.css'],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            filename: 'index.html'
        })
    ],
    mode: ''
}