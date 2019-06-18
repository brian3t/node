'use strict';
const _ = require('lodash')

function worker(orders) {
    return _.orderBy(orders, 'quantity', 'desc')
}

let orders = [{ article: 41,   quantity: 24 },
    { article: 2323, quantity: 2  },
    { article: 655,  quantity: 23 }]


console.log(worker(orders));
module.exports = worker
