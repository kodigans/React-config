const path = require('path');
const merge = require('webpack-merge');
const loaders = require('../webpackConfig/webpack.loaders');

module.exports = merge([
    {
        mode: 'development',
        devtool: 'source-map',    
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
            modules: [
                'node_modules',
                path.resolve(__dirname, '..', 'node_modules'),
            ],
        },
    },
    loaders]
)