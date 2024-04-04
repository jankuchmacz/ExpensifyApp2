//path to current location, absolute
//console.log(__dirname);
const path = require('path');
//console.log(path.join(__dirname, 'public'))
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const  webpack  = require('webpack');
//entry point - we have to provide it, where webpack should start
//output file - where we put it

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if(process.env.NODE_ENV === 'test'){
    require('dotenv').config({path: '.env.test' });
}else if(process.env.NODE_ENV === 'development'){
    require('dotenv').config({path: '.env.development'});
}

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
    return {
            entry: './src/app.js',
            output: {
                path: path.join(__dirname, 'public', 'dist'),
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
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
                'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID),
                'process.env.FIREBASE_MEASURMENT_ID': JSON.stringify(process.env.FIREBASE_MEASURMENT_ID),
            })
        ],
        //SourceMap - using source maps makes debugging faster
        //we get information where error occurs
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    }
}
//loader - how a file is transformed when webpack uses it for example transform it with babel


