const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@pages',resolve('src/pages'))
            .set('@styles',resolve('src/assets/styles'))
            .set('@common',resolve('src/common'))
    },

    devServer: {
        proxy: {
            '/api': {
            target: 'http://localhost:8888'
            // ,
            // pathRewrite: {
            //   '^/api': '/static/mock'
            // }
            }
        }
    }
}