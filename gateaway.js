const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// ke game service
app.use('/list', createProxyMiddleware({
  target: 'http://127.0.0.1:3001',
  changeOrigin: true,
  pathRewrite: {
    '^/games': '/games',
  }
}));

// ke review service
app.use('/reviews', createProxyMiddleware({
  target: 'http://localhost:3002',
  changeOrigin: true,
  pathRewrite: {
 '^/reviews': '', // Menghapus '/service2' dari URL untuk diteruskan ke Service2
 }
}));

app.listen(3000, () => {
  console.log("Gateway jalan di 3000");
});