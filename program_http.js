'use strict';

const express = require('express');
const fs = require('fs');
const path = require('path');
const http = require('http');
const BL = require('bl');

let all_custom_args = process.argv.slice(2);
let urls = all_custom_args.slice(0, 3);
let all_data = [];

for (let url_index in urls) {
    let httpget = http.get(urls[url_index], (res) => {
        res.pipe(BL((err, data) => {
            if (err) {
                return;
            }
            data = data.toString()
            all_data[url_index] = data
            if (all_data.length === 3) {//when all done, print them all
                console.log(all_data.join('\n'));
            }
        }))
    });
}

let a = 1;