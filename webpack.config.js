const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { mainModule } = require('process');

module.exports = {
    mode: "development",
    entry: './script.js',
    output:{
        filename: 'main.js',
        path: path.resolve(__dirname,'dist'),
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'index.html'),
            minify:true
        })
    ]

}



