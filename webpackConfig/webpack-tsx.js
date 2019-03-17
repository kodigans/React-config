module.exports = {
    module: {
        rules: [
            {
                test: /\.tsx$/,                
                use: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/                
            }
        ]
    }
}