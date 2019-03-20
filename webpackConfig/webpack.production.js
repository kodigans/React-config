
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx$/,                
                use: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/                
            },
            {
                test: /\.less$/,                
                use: extractTextWebpackPlugin.extract({                   
                    use: ['css-loader', 'less-loader']
                })
            },
        ]
    }, 
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new extractTextWebpackPlugin('style/style.css')
    ]
}