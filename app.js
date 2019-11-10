const express = require('express')
const app = express()
const favicon = require('serve-favicon')
const path = require('path')

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.get('/url2', (req, res, next)=>{
    return res.end('hiyabcded')
})

app.get('/', (req, res, next)=>{
    return res.end('root here')
})

app.listen(3000,'nodelocal')

