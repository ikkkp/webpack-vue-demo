const path = require('path');
const {merge} = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const baseConfig = require('./webpack.base.config.js');


module.exports = merge(baseConfig, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './', // 可能需要根据你的部署需求调整这个配置
    },
    plugins: [
        new CleanWebpackPlugin(), // 清理输出目录

        // 可以添加其他的生产环境插件或者配置
    ],
    // 可以根据需要添加其他的 loaders、optimizations、source maps 等配置
});