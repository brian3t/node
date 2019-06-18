// include the Lo-Dash library
const _ = require("lodash");

const worker = function (incomes) {
    let avg_income = _.reduce(incomes, (sum, income) => (sum + income.income), 0) / incomes.length
    let performance_sorted_split = _.chain(incomes)
        .orderBy('income')
        .partition((income) => {
                return (income.income <= avg_income)
            }
        )
        .value()
    return {average: avg_income, underperform: performance_sorted_split.shift(), overperform: performance_sorted_split.shift()}
};

// export the worker function as a nodejs module
module.exports = worker;

let incomes = [{name: "mike", income: 2563},
    {name: "kim", income: 1587},
    {name: "liz", income: 3541},
    {name: "tom", income: 2475},
    {name: "bello", income: 987},
    {name: "frank", income: 2975}]


// console.log(worker(incomes));