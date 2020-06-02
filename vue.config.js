module.exports = {
  devServer: {
    proxy: {
      '^/rest': {
        target: 'http://localhost:8090',
        ws: true,
        changeOrigin: true,
      }
    },
  },
}