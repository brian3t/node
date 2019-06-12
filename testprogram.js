'use strict';

const repeat = require('./program')


repeat(() => {
    console.log(`Im happy`);
}, 2000) // 3

setTimeout(() => {
    console.log(`timeout exceeded. repeat should stop now`);
}, 100)