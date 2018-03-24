var path = require('path');
var extractTextPlugin = require('extract-text-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');
var cleanWebpackPlugin = require('clean-webpack-plugin');

var extractPlugin = new extractTextPlugin({
    filename: 'main.css'
});
module.exports = {
  entry: {
      index: './src/js/index.js',
      provReg: './src/js/provider_register.js',
      cliReg: './src/js/client_register.js',
      provLogin: './src/js/provider_login.js',
      cliLogin: './src/js/client_login.js',
      provHome: './src/js/provider_home.js',
      cliHome: './src/js/client_home.js',
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
            template: 'src/pages/provider/providerReg.html',
            chunks: ['provReg']
        }),
        new htmlWebpackPlugin({
            filename: 'clientReg.html',
            template: 'src/pages/client/clientReg.html',
            chunks: ['cliReg']
        }),
        new htmlWebpackPlugin({
            filename: 'providerLogin.html',
            template: 'src/pages/provider/providerLogin.html',
            chunks: ['provLogin']
        }),
        new htmlWebpackPlugin({
            filename: 'clientLogin.html',
            template: 'src/pages/client/clientLogin.html',
            chunks: ['cliLogin']
        }),
        new htmlWebpackPlugin({
            filename: 'providerHome.html',
            template: 'src/pages/provider/providerHome.html',
            chunks: ['provHome']
        }),
        new htmlWebpackPlugin({
            filename: 'clientHome.html',
            template: 'src/pages/client/clientHome.html',
            chunks: ['cliHome']
        }),
        new cleanWebpackPlugin(['dist'])
    ]
};
