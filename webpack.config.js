const path = require('path')
const fs = require('fs')

const CopyPlugin = require("copy-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin").default
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

module.exports = {
    entry: {
        'bundle': [
            path.resolve(__dirname, './source/main.js')
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
            }),
            new CssMinimizerPlugin()
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