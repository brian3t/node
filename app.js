const express = require('express')
const greet_middleware = require('./greet')
const app = express()
const favicon = require('serve-favicon')
const path = require('path')

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use('/greet', greet_middleware({greeting_verb:'aloha'}))

app.get('/url2', (req, res, next)=>{
    return res.end('hiyabcded')
})

app.get('/', (req, res, next)=>{
    return res.end('root here')
})
app.get('/other', other.doSomething)

app.listen(3000,'nodelocal')


function myFunction(){
    console.log(`before process`)
}
