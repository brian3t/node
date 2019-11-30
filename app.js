const express = require('express')
const bodyparser = require('body-parser')
var app = express()
const path = require('path')
const fs = require('fs')

app.use((req,res,next)=>{
    fs.readFile(path.resolve(__dirname, 'views/user.ejs'), (err, binaryContent)=>{
        res.end(`string sent was this hex string ` + binaryContent.toString('hex'))
    })
})

app.listen(3000)