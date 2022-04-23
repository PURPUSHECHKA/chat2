const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    entry: './client/main.jsx',
    mode: 'development',
    output: {
        filename: 'assets/js/[name].[contenthash].js',
        chunkFilename: 'assets/js/[name].[contenthash].chunk.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devServer: {
        hot: true,
        open: false,

        port: 8087,
        proxy: {
            context: ['/api'],
            target: `http://localhost:${process.env.PORT || 8090}`
            // ws: true
        },
        host: 'localhost',
        historyApiFallback: true,
        client: {
            overlay: {
                errors: true,
                warnings: false
            }
        }
    },

    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.wasm', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new ESLintPlugin({
            extensions: ['.js', '.jsx'],
            exclude: 'node_modules'
        }),
        new MiniCSSExtractPlugin({
            filename: 'css/main.css'
        })
    ]
}

module.exports = config
