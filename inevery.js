'use strict';
const _ = require('lodash')

function worker(cities) {
    let cities_sorted = {}
    _.forEach(cities, (city_detail, city_name, cities) => {
        let pop = city_detail.population
        let pop_size = ''
        if (pop > 1) pop_size = 'big'
        else if (pop > 0.5) pop_size = 'med'
        else pop_size = 'small'
        city_detail.size = pop_size
    })
    return cities
}

let cities = {
    Hamburg: {population: 1.698},
    Strasbourg: {population: 0.272},
    Rome: {population: 2.753},
    Dublin: {population: 0.528}
}


console.log(worker(cities));
module.exports = worker
