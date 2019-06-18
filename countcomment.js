// include the Lo-Dash library
const _ = require("lodash");

const worker = function (comments) {
    let comments_grouped = _.groupBy(comments, 'username')
    return comments_grouped
};

// export the worker function as a nodejs module
module.exports = worker;

let comments = [ { "username": "tim",
    "comment": "when you have new workshoppers?" },
    { "username": "cat_lover",
        "comment": "wtf? where are all the cats gone?" },
    { "username": "max",
        "comment": "where have you been on friday? we missed you!" },
    { "username": "max",
        "comment": "Do dont anwer anymore - why?" },
    { "username": "cat_lover",
        "comment": "MORE cats!!!" },
    { "username": "max",
        "comment": "i really love your site" }]

console.log(worker(comments));