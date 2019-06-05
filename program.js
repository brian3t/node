'use strict';

const express = require('express');
const fs = require('fs');
const path = require('path');

var mymodule = require('./mymodule');

let all_custom_args = process.argv.slice(2);
let dir = all_custom_args.shift();
let extension = all_custom_args.shift();
var callback = function (err, list) {
    if (err) throw err;
    list.forEach(function (file) {
        console.log(file);
    })
};
mymodule(dir, extension, callback);

// App
/*
const app = express();
app.get('/', (req, res) => {
    res.send('Hello world\n');
});

app.listen(PORT, HOST);
*/
// console.log(`Running on http://${HOST}:${PORT}`);

/*

fs.readdir(file_path, (err, files) => {
    if (err){
        console.error(`Error`);
        return false;
    }
    for (let file of files) {
        let file_ext = path.extname(file);
        if (file_ext === extension){
            console.log(`${file}`);
        }
        let a = 1;
    }
});*/

