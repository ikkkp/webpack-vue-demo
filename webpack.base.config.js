const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    VueLoaderPlugin
} = require('vue-loader');
const webpack = require('webpack'); // 引入 webpack
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const {
    ElementPlusResolver
} = require('unplugin-vue-components/resolvers')


/**
* @Description:entry入口配置vendor，Webpack会将Vue库打包成一个单独的文件，提高了网页加载性能
* @Version:1.0
* @Author:Huangzl
* @Date:2023/10/23 09:06:50
*/
module.exports = {
    entry: {
        main: './src/main',
        vendor: './src/vendors.js'
    },
    output: {
        filename: '[name].[fullhash].js', // 使用 [fullhash] 替代 [hash]，这是新版本 webpack 的写法
        path: path.join(__dirname, 'dist'),
        publicPath: './'
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg|eot|woff|woff2|ttf)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },

        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            BASE_URL: JSON.stringify('./') // 这里定义了 BASE_URL 为根路径 '/'
        }),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ]
};