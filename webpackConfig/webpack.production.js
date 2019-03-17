
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'production',
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new extractTextWebpackPlugin('style/style.css')
    ]
}