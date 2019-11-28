const express = require('express')

var app = express()

app.use('/wiki', (req, res, next)=>{
    res.end('hello world')
})

app.use('/', (req,res,next)=>{
    res.end(`hi I'm root`)
})