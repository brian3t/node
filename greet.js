const express = require('express')
exports = function (options = {}){
    const router = new express.Router()
    router.get('/greet', (req, res, next) => {
        res.end(options.greeting_verb)
    })
    return router
}