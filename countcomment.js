// include the Lo-Dash library
const _ = require("lodash");

const worker = function (comments) {
    let comments_grouped = _.chain(comments)
        .groupBy('username')
        .mapValues((list_of_comments, username, comments_grouped) => {
            return list_of_comments.length
        })
        .value()
    comments_grouped_col = []
    _.each(comments_grouped, (comment_grouped, username, comments_grouped) => {
        comments_grouped_col.push({username: username, comment_count: comment_grouped})
    })
    return _.orderBy(comments_grouped_col, 'comment_count', 'desc')
};

// export the worker function as a nodejs module
module.exports = worker;

let comments = [{
    "username": "tim",
    "comment": "when you have new workshoppers?"
},
    {
        "username": "cat_lover",
        "comment": "wtf? where are all the cats gone?"
    },
    {
        "username": "max",
        "comment": "where have you been on friday? we missed you!"
    },
    {
        "username": "max",
        "comment": "Do dont anwer anymore - why?"
    },
    {
        "username": "cat_lover",
        "comment": "MORE cats!!!"
    },
    {
        "username": "max",
        "comment": "i really love your site"
    }]

console.log(worker(comments));