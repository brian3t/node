'use strict';

const slice = require('./program')


var nums = [1,2,3,4,5]

// your slice function should match the regular
// behaviour of slice, except it takes the array
// as the first argument
nums = "ohlala"

console.log(slice(nums))
console.log(slice(nums, 0, 2)) // [1, 2]
console.log(slice(nums, 1, 2)) // [2]

// regular slice usage for comparison
nums.slice(0, 2) // [1, 2]
nums.slice(1, 2) // [2]
