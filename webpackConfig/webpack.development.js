const extractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {            
        open: true,
        proxy: {
            '*':  'http://localhost:1337',
        },

      },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
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
        new extractTextWebpackPlugin('style/style.css'),
        new HtmlWebpackPlugin({
            template: './src/index.html',      
          }),  
    ]
}