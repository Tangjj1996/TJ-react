const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    context: path.resolve(__dirname, '../src'),
    entry: ['@babel/polyfill', './index.js'],
    output: {
        filename: '[name][hash:6].js',
        path: path.resolve(__dirname, '../dist')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            name: '[name].html'
        })
    ]
}