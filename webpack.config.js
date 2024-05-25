const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCSSExtractPlugin =require("mini-css-extract-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader",
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "main.html"
        }),
        new MiniCSSExtractPlugin()
        
    ],
    mode:"development"
}