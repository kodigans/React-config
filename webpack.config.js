const merge = require('webpack-merge');
const common = require('./webpackConfig/webpack.common');
const prod = require('./webpackConfig/webpack.production');
const dev = require('./webpackConfig/webpack.development')

module.exports = env => {
  if (env.production === 'build') {    
    return merge(common, dev)
  } 
  
  return merge(common, prod);  
};