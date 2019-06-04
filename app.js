'use strict';

const express = require('express');
const fs = require('fs');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
/*
const app = express();
app.get('/', (req, res) => {
    res.send('Hello world\n');
});

app.listen(PORT, HOST);
*/
// console.log(`Running on http://${HOST}:${PORT}`);

let all_custom_args = [];
all_custom_args = process.argv.slice(2);
let file_path = all_custom_args.pop();

let str = fs.readFileSync(file_path, 'utf8');
let lines = str.split('\n');
let num_of_lines = Math.abs(lines.length -1 );

console.log(`${num_of_lines}`);



let a = 1;