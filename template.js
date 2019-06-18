// include the Lo-Dash library
const _ = require("lodash");

const worker = function (variables) {
    variables.login = variables.login.length
    return _.template('Hello <%= name %> (logins: <%= login %>)')(variables)
};

// export the worker function as a nodejs module
module.exports = worker;

let variables = {
    name: "Foo",
    login: [1407574431, 140753421]
}


console.log(worker(variables));