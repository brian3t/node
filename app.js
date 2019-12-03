const express = require('express')
const bodyparser = require('body-parser')
const env = require('./environment')
const propreader = require('properties-reader')
const properties = new propreader(env)
const port = properties.get('main.app.port')
console.log(`port: ${port}`)
return 999
var app = express()
const path = require('path')
const fs = require('fs')
const ev=require('events').EventEmitter

class Dog extends ev {
}

class Food {
}

let my_dog = new Dog()

my_dog.on('chew', (item)=>{
    if (item instanceof Food){
        console.log(`good dog eating food`)
    } else {
        console.log(`time to buy another ${item} Bad dog`)
    }
})

my_dog.emit('chew','shoe')

const bacon=new Food()
my_dog.emit('chew',bacon)
