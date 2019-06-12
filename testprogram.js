'use strict';

const reduce = require('./recursion')
// Your reduce function should behave the same as a
// regular Array#reduce, but it will take the array
// to operate on as the first argument:

console.log(reduce([1,2,3], function(prev, curr, index, arr) {
    return prev + curr
}, 0))
// => 6

