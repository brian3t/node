'use strict';

function checkUsersValid(goodUsers) {
    function is_valid(user) {
        return goodUsers.some(element => (element.id === user.id))
    }

    return function allUsersValid(submittedUsers) {
        // SOLUTION GOES HERE
        return submittedUsers.every(is_valid)
    };
}

module.exports = checkUsersValid
