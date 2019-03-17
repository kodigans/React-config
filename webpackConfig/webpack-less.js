const extractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.less$/,                
                use: extractTextWebpackPlugin.extract({                   
                    use: ['css-loader', 'less-loader']
                })
            }
        ]
    }
}