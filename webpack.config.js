const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
    entry: './source/main.js',
    output: {
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "page", to: "." },
            ],
        }),
    ]
}