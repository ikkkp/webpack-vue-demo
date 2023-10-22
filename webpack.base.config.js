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


module.exports = {
    entry: {
        main: './src/main',
        vendor: './src/vendors.js'
    },
    output: {
        filename: 'js/[name].[fullhash].js', // 使用 [fullhash] 替代 [hash]，这是新版本 webpack 的写法
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