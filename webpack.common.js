const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// plugin 在webpack某个时刻帮我们干一些事情

module.exports = {
    entry: {
        // main: './src/index.js',
        // sub: './src/common.js'
        main: './src/app.js'
    },
    output: {
        // html script src add hostname
        // publicPath: 'http://www.baidu.com/',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(png|jpeg|jpg|gif)$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: 'imgs',
                        limit: 1024000000
                    }
                }
            },
            {
                test: /\.(eot|ttf|svg|woff)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[contenthash].[ext]',
                        outputPath: 'fonts'
                    }
                }
            },
            {
                test: /\.(s(a|c)ss|css)$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            // 0 => no loaders (default);
                            // 1 => postcss-loader;
                            // 2 => postcss-loader, sass-loader
                        },
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // auto insert entry url to index.html
            template: 'index.html'
        })
    ]
}
