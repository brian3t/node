// include the Lo-Dash library
const _ = require("lodash");

const worker = function (users) {
    return _.forEach(users, (value, index, collection) => {
        let size = '', population = value.population;
        if (population > 1) {
            size = 'big'
        } else if (population > 0.5) {
            size = 'med'
        } else {
            size = 'small'
        }
        value.size = size
    })
};

// export the worker function as a nodejs module
module.exports = worker;
