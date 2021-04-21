const path = require('path');

module.exports = {
    mode: "development",
    context: path.resolve(__dirname, './'),
    entry: "app.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
    }
}