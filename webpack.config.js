const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        aboutMe: './src/aboutMe.js'
    },
    output: {
        filename: '[name].bundled.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            host: 3000,
            server: { baseDir: ['public'] }
        })
    ]
}