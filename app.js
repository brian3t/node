const express = require('express')
var app = new express()
var cors = require('cors'); // We will use CORS to enable cross origin domain requests.
const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/bn', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (){
    // we're connected!
    console.log(`we're connected!`)
});
var myCol1Schema = new Schema({
    request: String,
    time: Number
}, {
    collection: 'myCol1'
});
myCol1Schema.index({request: 'text'});
var Model = mongoose.model('myCol1', myCol1Schema);

app.get('/save/:query', cors(), function(req, res){
    let query = req.params.query;
    let savedata = new Model({
        'request': query,
        'time': Math.floor(Date.now() / 1000) // Time of save the data in unix timestamp format
    }).save(function (err, result){
        if (err) throw err;
        if (result) {
            res.json(result)
        }
    })
})

/*
Model.find({request:/.*thon.*!/},(err, myCols)=>{
    if (err) return console.error(err)
    console.log(myCols)
})
*/

/*const kittySchema = new mongoose.Schema({
    name: String
});
kittySchema.methods.speak = function (){
    let greeting = this.name ? "Meow name is " + this.name : "I don't have a name";
    console.log(greeting);
}
var Kitten = mongoose.model('Kitten', kittySchema);

let speakingKitten = new Kitten({name: 'doremon'})
speakingKitten.speak()

Kitten.find({name: /^.+mon$/},(err, kittens)=>{
    if (err) return console.error(err);
    console.log(kittens)
})*/

app.get('/find/:query', cors(), function (req, res){
    var query = req.params.query
    let regexp = new RegExp(`.*${query}.*`)
    Model.find({
        request: regexp
    }, function (err, result){
        if (err) throw err;
        if (result) {
            res.json(result)
        } else {
            res.send(JSON.stringify({
                error: 'Error'
            }))
        }
    })
})
/*
const Schema = mongoose.Schema

var schemaName = new Schema({
    request: String,
    time: Number
}, {
    collection: 'bn'
})

var Model = mongoose.model('bnModel', schemaName)
mongoose.connect('mongodb://localhost:27017/dbName')

*/

app.listen(3000, () => console.log(`node running on 3000`))

