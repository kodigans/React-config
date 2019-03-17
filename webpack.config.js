const merge = require('webpack-merge');
const common = require('./webpackConfig/webpack.common');
const prod = require('./webpackConfig/webpack.production');
const dev = require('./webpackConfig/webpack.development')
const lessLoader = require('./webpackConfig/webpack-less');
const jsxLoadrer = require('./webpackConfig/webpack-jsx-js');

module.exports = env => {
  if (env.production === 'build') {    
    return merge(common, lessLoader, jsxLoadrer, dev)
  } 
  
  return merge(common,lessLoader, jsxLoadrer, prod);  
};