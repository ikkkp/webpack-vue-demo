const path = require('path');
const {
    merge
} = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const base = require('./webpack.base.config.js');

module.exports = merge(base, {    
    mode: 'development',
    devServer: {
        port: 8080
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/' // 这里设置了 publicPath
    },
    plugins: [
        new CleanWebpackPlugin(), // 清理输出目录

        // 可以添加其他的生产环境插件或者配置
    ]


});