const path = require('path');

module.exports = {
    lintOnSave: false,
    devServer: {
        // proxy: 'https://sit-author.51uuabc.com'
        proxy: {
            '/api': {
              target: 'https://sit-author.uuabc.com',
              ws: true,
              changeOrigin: true
            },
            '/login': {
              target: 'https://sit-author.uuabc.com',
              ws: true,
              changeOrigin: true
            },
            '/logout': {
                target: 'https://sit-author.uuabc.com',
                ws: true,
                changeOrigin: true
            }
        }
    },
    pluginOptions: {
        'style-resources-loader': {
          preProcessor: 'scss',
          patterns: [
            path.resolve(__dirname, 'src/assets/styles/variables.scss'),
            path.resolve(__dirname, 'src/assets/styles/mixin.scss')
          ]
        }
    },
}
