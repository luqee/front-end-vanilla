var path = require('path');
var extractTextPlugin = require('extract-text-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');
var cleanWebpackPlugin = require('clean-webpack-plugin');

var extractPlugin = new extractTextPlugin({
    filename: 'main.css'
})
module.exports = {
  entry: {
      index: './src/js/index.js',
      provReg: './src/js/provider_register.js',
    //   provCss: './src/scss/default.scss'
  },
  // target: 'node',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use:[
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpg|png)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: 'img/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        extractPlugin,
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            chunks: ['index']
        }),
        new htmlWebpackPlugin({
            filename: 'providerReg.html',
            template: 'src/providerReg.html',
            chunks: ['provReg']
        }),
        new cleanWebpackPlugin(['dist'])
    ]
};
