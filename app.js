const express = require('express')
const ejs = require('ejs')
const cors = require('cors'); // Use cors module for enable Cross-origin resource sharing
const greet_middleware = require('./greet')
const other = require('./other')

const app = express()
app.use(cors())
const favicon = require('serve-favicon')
const path = require('path')

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(express.static('public'));
app.set('view engine', 'ejs')
// app.set('view', 'src/views')
app.use('/user', (req, res, next) => {
    res.render('user', {supplies: ['cake', 'cookie', 'detox', 'beef'], title: 'user title here'})
})
app.get('/json', function (req, res){
    var info = {
        'string_value': 'StackOverflow'//,GoalKicker.com – Node.js Notes for Professionals 35
        , 'number_value': 8476
    }
    res.status(200).json(info);
// or
    /* res.send(JSON.stringify({
    string_value: 'StackOverflow',
    number_value: 8476
    })) */
//you can add a status code to the json response
    /* res.status(200).json(info) */
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

app.listen(80, 'nodelocal')


function myFunction(){
    console.log(`before process`)
}
