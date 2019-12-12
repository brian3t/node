var fs = require('fs');
var existsAsync = async function (path){
    return new Promise(function (resolve, reject){
        fs.exists(path, function (exists){
// exists is a boolean
            if (exists) {
// Resolve successfully
                resolve(exists);
            } else {
// Reject with error
                reject(new Error('path does not exist'));
            }
        });
    });
}
// Use as a promise now
let exists = existsAsync('/var/www/nod2e/test.js').then(function (ex){
    console.log(`file exists! ${ex}`);
}).catch((err)=>console.error(`Error: ${err}`))
/*

existsAsync('/path/to/some/file').then(function() {
    console.log('file exists!');
}).catch(function(err) {
// file does not exist
    console.error(err);
});*/
