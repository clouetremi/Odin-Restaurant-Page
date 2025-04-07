const path = require('path');  // Importation de 'path'
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Le plugin HTML

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),  // Utilisation de 'path' ici
        clean: true,
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: {
        static: './dist',
        port: 8080,
        open: true,
    },
};
