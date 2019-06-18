// include the Lo-Dash library
const _ = require("lodash");

const worker = function (words) {
    return _.chain(words)
        .map(word => (word + 'Chained').toUpperCase())
        .sortBy()
        .value()
};

// export the worker function as a nodejs module
module.exports = worker;
