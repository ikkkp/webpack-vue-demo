const path = require('path');
const { merge } = require('webpack-merge');
const base = require('./webpack.base.config.js');

module.exports = merge(base, {
    mode: 'development',
    devServer: {
        port: 9000
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/' // 这里设置了 publicPath
    },
    

});
