//entry output
const path=require('path');
//console.log(__dirname);
console.log("bhdfjh");
module.exports={
     entry : './src/app.js',
    output : {
    path: path.join(__dirname,'public'),
    filename: 'bundle.js'
}};
// module.exports='hello world';