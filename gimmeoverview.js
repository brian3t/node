// include the Lo-Dash library
const _ = require("lodash");

const worker = function (orders) {
    let orders_sumquant = _.chain(orders).reduce((sum, order) => {
        sum[order.article] = sum[order.article] || 0
        sum[order.article] += order.quantity
        return sum
    }, {}).map((quantity, article) => {
        return {article: parseInt(article), total_orders: quantity}
    }).orderBy('total_orders', 'desc')
    return orders_sumquant
};

// export the worker function as a nodejs module
module.exports = worker;

let orders = [{
    "article": 2323,
    "quantity": 4
},
    {
        "article": 41,
        "quantity": 1
    },
    {
        "article": 2323,
        "quantity": 10
    },
    {
        "article": 655,
        "quantity": 2
    },
    {
        "article": 655,
        "quantity": 4
    }]


// console.log(worker(orders));