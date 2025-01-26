const path = require('path');

module.exports = {
    entry: './frontend/src/index.js',
    output: {
        path: path.resolve(__dirname, 'frontend/dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        outputPath: 'images/'
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'frontend/public'),
        compress: true,
        port: 3000,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    mode: 'development'
};