module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: './index.jsx',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};