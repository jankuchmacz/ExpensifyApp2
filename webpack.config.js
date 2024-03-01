//path to current location, absolute
//console.log(__dirname);
const path = require('path');
//console.log(path.join(__dirname, 'public'))
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//entry point - we have to provide it, where webpack should start
//output file - where we put it

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
    return {
            entry: './src/app.js',
            output: {
                path: path.join(__dirname, 'public'),
                filename: 'bundle.js'
            },
        module:{
        rules: [{
            loader:'babel-loader',
            test: /\.js$/, //only files which end with .js
            exclude: /node_modules/ //exclude some files
        },{
            test:/\.s?css$/, //target all files that end with .scss
            use: CSSExtract.extract({
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            })
            //thanks to use we can specify array of loaders
        }] 
        },
        plugins: [
            CSSExtract
        ],
        //SourceMap - using source maps makes debugging faster
        //we get information where error occurs
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }
}
//loader - how a file is transformed when webpack uses it for example transform it with babel


