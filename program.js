function loadUsers(userIds, load, done) {
    var users = []
    /*for (var i = 0; i < userIds.length; i++) {
        users.push(load(userIds[i]))
    }*/
    userIds.forEach((userId, index, arr) => {
        load(userId, (result) => {
            here result is user or null
        })
    })
    return users
}

module.exports = loadUsers

