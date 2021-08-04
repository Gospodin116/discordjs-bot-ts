const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    resolve: {
        extensions: [ '.tsx', '.ts', '.js']
    },

    entry: {
        index: './src/index.ts',
    },

    output: {
        path: path.resolve(__dirname),
        filename: 'dist/index.js'
    },

    target: 'node',

    externals: [nodeExternals({
        modulesDir:'../../node_modules',
    })],

    node: {
        __dirname: false,
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.node$/,
                loader: "node-loader",
            },
        ]
    }
};