const path = require('path')
const fs = require('fs')

const CopyPlugin = require("copy-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
    entry: {
        'bundle.js': [
            path.resolve(__dirname, './source/main.js')
        ],
    },
    output: {
        filename: '[name]',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "page", to: "." },
            ],
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                minify: TerserPlugin.uglifyJsMinify,
                terserOptions: {
                    compress: true
                },
                parallel: true,
            })
        ],
    }
}

// Bundle CSS files
function bundleCSS(folder, target) {
    let files = fs.readdirSync(folder)
    let data = ''

    for (let f of files)
    {
        data += fs.readFileSync(path.resolve(folder, f), 'utf-8') + '\n'
    }

    fs.writeFileSync(target, data)
}

bundleCSS('./style/', './dist/bundle.css')