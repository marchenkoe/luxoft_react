const path = require('path');
// const PATHS = {app: "./js/app", build: path.join(__dirname, 'build')};
const PATHS = {app: "./js/containers/app", build: path.join(__dirname, 'build')};
module.exports = {
    devtool: 'source-map',
    mode: 'development',
    entry: {app: PATHS.app},
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }, {test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
        },
            {test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
        }]

    },
    output: {path: PATHS.build, filename: 'bundle.js'}
};