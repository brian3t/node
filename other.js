const express = require('express')
module.exports = {
    doSomething: function (){
        const router = new express.Router()
        router.get('other', (req, res, next) => {
            res.end('doing other thing here')
        })
        return router
    }
}