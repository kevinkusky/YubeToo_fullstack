const path = require('path');
// const webpack = require('webpack');
// const fs = require('fs');
// const os = require('os');
// const child_process = require('child_process');

module.exports = {
    context: __dirname,
    entry: './frontend/yube_too.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                // exclude: [/node_modules/, /ffmpeg/],
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }
        ]
    },
    // devServer: {
    //     historyApiFallback: true
    // },
    devtool: 'inline-source-map',
    resolve: {
        extensions: [".js", ".jsx", "*"],
    },
    // externals: {
	//   child_process: child_process,
	//   fs: fs,
    //   os: os,
    // },
    // plugins: [
    //     new webpack.DefinePlugin({
    //         'process.env.FLUENTFFMPEG_COV': false
    //     })
    // ]
};