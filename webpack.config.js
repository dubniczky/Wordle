const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
    entry: './source/main.js',
    output: {
        filename: 'bundle.js'
    },
    mode: 'development',
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "page", to: "." },
            ],
        }),
    ]
}