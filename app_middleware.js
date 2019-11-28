const express = require('express')
const ejs = require('ejs')
const cors = require('cors'); // Use cors module for enable Cross-origin resource sharing
const greet_middleware = require('./greet')
const other = require('./other')
var bodyParser = require('body-parser')

const app = express()
app.use(cors())
const favicon = require('serve-favicon')
const path = require('path')

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(express.static('public'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.set('view engine', 'ejs')
// app.set('view', 'src/views')

//each request will pass through it
app.use(function(req, res, next){
    req.user = 'testuser';
    req.timestampe = (new Date()).toISOString()
    next();
// it will pass the control to next matching route
});

////////////////init done
app.use('/user', (req, res, next) => {
    var user = req.user;
    console.log(user); // testuser
    console.log(req.timestampe)

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
app.use('/settings', (req,res)=>{
    res.setHeader('Content-Type', 'json');
    res.write(res.body || 'undefined object')
    res.send()
})

app.listen(3000, 'nodelocal')
// app.listen(80, 'nodelocal')


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('why are you here? Probably route not matched? Try another route, try not to come back here');
    err.status = 404;
//pass error to the next matching route.
    next(err);
});


function myFunction(){
    console.log(`before process`)
}
