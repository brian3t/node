// include the Lo-Dash library
const _ = require("lodash");

const worker = function (cities) {
    let is_more_than_19 = function (v) {
        return v > 19
    }
    let is_warm = (v) => v < 19
    let hot_cities = [], warm_cities = []
    _.forEach(cities, (city, i, cities) => {
        if (! city) {
            return []
        }
        if (_.every(city, is_more_than_19)) {
            hot_cities.push(i)
        } else if (_.some(city, is_more_than_19)) {
            warm_cities.push(i)
        }
    })
    return {hot: hot_cities, warm: warm_cities}
};

// export the worker function as a nodejs module
module.exports = worker;
//
//
// var cities = {
//     "Hamburg": [14,
//         15,
//         16,
//         14,
//         18,
//         17,
//         20,
//         22,
//         21,
//         18,
//         19,
//         23],
//     "Munich": [16,
//         17,
//         19,
//         20,
//         21,
//         23,
//         22,
//         21,
//         20,
//         19,
//         24,
//         23],
//     "Madrid": [24,
//         23,
//         20,
//         24,
//         24,
//         23,
//         21,
//         22,
//         24,
//         20,
//         24,
//         22],
//     "Stockholm": [16,
//         14,
//         12,
//         15,
//         13,
//         14,
//         14,
//         12,
//         11,
//         14,
//         15,
//         14],
//     "Warsaw": [17,
//         15,
//         16,
//         18,
//         20,
//         20,
//         21,
//         18,
//         19,
//         18,
//         17,
//         20]
// }
//
// console.log(worker(cities));