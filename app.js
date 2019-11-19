const express = require('express')
const ejs = require('ejs')
const greet_middleware = require('./greet')
const other = require('./other')
const app = express()
const favicon = require('serve-favicon')
const path = require('path')

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.set('view engine', 'ejs')
// app.set('view', 'src/views')
app.use('/user', (req, res, next)=>{
    res.render('user', {supplies: ['cake', 'cookie', 'detox', 'beef'], title: 'user title here'})
})

class GreetingService {
    constructor(greeting = 'Hello'){
        this.greeting = greeting
    }

    createGreeting(name){
        return `${this.greeting}, ${name}!`
    }
}

app.use('/greeten', greet_middleware({service: new GreetingService('hello')}))
app.use('/greetit', greet_middleware({service: new GreetingService('ciao')}))

app.get('/', (req, res, next) => {
    return res.end('root here')
})

app.listen(3000, 'nodelocal')


function myFunction(){
    console.log(`before process`)
}
