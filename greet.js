"use strict";
const express = require('express')

module.exports = function (options = {}){ //Router factory
    const router = express.Router()
    //get controller
    const {service} = options
    router.get('/', (req,res,next)=>{
        if (!res.query || !res.query.name){
            return res.render('error', {
                message: 'query named name missing'
            })
        }
        res.end(service.createGreeting(req.query.name || 'Stranger'))
    })


    return router
}