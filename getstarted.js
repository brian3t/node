'use strict';
const _ = require('lodash')

function checkUsersValid(goodUsers) {
    return _.filter(goodUsers, 'active')
}

let users = [
    { id: 22, username: "martin", active: true},
    { id: 23, username: "max",    active: false},
    { id: 24, username: "linda",  active: false}
]



console.log(checkUsersValid(users));
module.exports = checkUsersValid
