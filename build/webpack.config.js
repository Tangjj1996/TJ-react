const merge = require('webpack-merge')
const devConfig = require('./webpack.config.dev')
const prodConfig = require('./webpack.config.prod')
const baseConfig = require('./webpack.config.base')

const config = process.NODE_ENV === 'development'? devConfig: prodConfig

module.exports = merge(baseConfig, config)