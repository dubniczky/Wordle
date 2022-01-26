const CopyPlugin = require("copy-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin").default

module.exports = {
    mode: 'development',
    entry: {
        'bundle': [
            './source/main.js'
        ]
    },
    devtool: 'source-map',
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "./source/page/", to: "." },
            ],
        }),
        new MiniCssExtractPlugin()
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
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
}