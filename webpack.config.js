//path to current location, absolute
//console.log(__dirname);
const path = require('path');
//console.log(path.join(__dirname, 'public'))

//entry point - we have to provide it, where webpack should start
//output file - where we put it
module.exports = {
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
        use: [
            'style-loader',
            'css-loader',
            'sass-loader'
        ]//thanks to use we can specify array of loaders
       }] 
    },
    //SourceMap - using source maps makes debugging faster
    //we get information where error occurs
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};
//loader - how a file is transformed when webpack uses it for example transform it with babel


