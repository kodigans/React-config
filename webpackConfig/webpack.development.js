const extractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {            
        open: true
      },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    plugins: [
        new extractTextWebpackPlugin('style/style.css'),
        new HtmlWebpackPlugin({
            template: './src/index.html',      
          }),  
    ]
}