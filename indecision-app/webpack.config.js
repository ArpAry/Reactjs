//entry output
const path=require('path');
//console.log(__dirname);
//console.log("bhdfjh");
module.exports={
    
     entry : './src/app.js',
   
     output : {
    path: path.join(__dirname,'public'),
    filename: 'bundle.js'},
   
    module:{
        rules:[{
            loader:'babel-loader',
            test:/\.js$/,
            exclude:/node_modules/
        }]
    },
    devtool :'eval-cheap-module-source-map',
    devServer:{
        allowedHosts:'auto'
    }
    
   
};
// module.exports='hello world';