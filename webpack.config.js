const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "development",
    watch: true,
    entry: "./src/index.ts",
    target: 'node',
    externals: [nodeExternals()],
    plugins: [
        new CopyPlugin([
            {from: 'src/views', to: 'views', flatten: true}
        ])
    ],
    module: {
        rules: [
            {
              loader: 'ts-loader',
              test: /\.ts$/,
              exclude: [
                /node_modules/
              ],
              options: {
                configFile: 'tsconfig.json'
              }
            }
        ]
    },
    resolve: {
        modules: [
            "node_modules"
        ],
        extensions: [
            '.ts', 
            '.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}