const express = require('express')
const app = express()

app.get('/url2', (req, res, next)=>{
    return res.end('hiyabcded')
})

app.listen(80,'nodelocal')

