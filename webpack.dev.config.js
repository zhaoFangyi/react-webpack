const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');
const devConfig =merge(baseConfig,{
    // 开启dev source map
    devtool: 'eval-source-map',
    // 配置plugin
    plugins: [
        new webpack.DefinePlugin({
            'process.env.API_ENV': '"development"'
        }),
        
        new HtmlwebpackPlugin({
            title: 'react-webpack-demo',
            filename: 'index.html',
            template: path.resolve(SRC_PATH, 'templates', 'index.html'),
			favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
            
        })
    ]
})

module.exports = devConfig