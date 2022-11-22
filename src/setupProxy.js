// 设置代理的js文件、
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/ajax',
        createProxyMiddleware({
            target: 'tps://i.maoyan.com',
            changeOrigin: true
        })
    )
}