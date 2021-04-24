// const proxy = require('http-proxy-middleware');
// solution: https://github.com/facebook/create-react-app/issues/8550
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(createProxyMiddleware('/api',
        { target: 'http://localhost:3001' }
    ));
}
