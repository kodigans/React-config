const extractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,                
                use: extractTextWebpackPlugin.extract({                   
                    use: [ 'style-loader', 'css-loader' ]
                }),             
            },
            {
                test: /\.(ts$|tsx$)/,                
                use: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/                
            },
        ]
    }
}