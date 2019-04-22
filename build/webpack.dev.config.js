/**
 * Created by Ysssssss on 19/4/15.
 */
const path = require('path')
const webpack = require('webpack')
const baseConfig = require('./webpack.base.config.js')
const merge = require('webpack-merge');
const PORT = process.env.PORT || 8000 // 默认8000端口，可以通过package.json配置

const config = merge(baseConfig, {
    devtool: 'source-map',
    devServer: {
        // 作为服务器发布的目录
        contentBase: path.resolve(__dirname, '../src'),
        // 热加载
        hot: true,
        // host 地址
        host: 'localhost',
        // 端口号
        port: PORT,
        historyApiFallback: true,
        // 是否在浏览器蒙层展示错误信息
        overlay: true,
        inline: true,

        proxy: {
            '/api': {
                target: 'http://dev.luedongtech.com:8020',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    mode: 'development'
})

module.exports = config