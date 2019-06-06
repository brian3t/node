'use strict';

const express = require('express');
const fs = require('fs');
const path = require('path');
const http = require('http');

let all_custom_args = process.argv.slice(2);
let url = all_custom_args.shift();

let httpget = http.get(url, (res) => {
    let all_data = [];
    res.setEncoding('utf8');
    res.on('data', (data) => {
        all_data.push(data);
    });
    res.on('error', (data) => {
        console.log(`Error now`);
        console.log(data);
    });
    res.on('end', (data) => {
        console.log(all_data.join('\n'));
    });
});