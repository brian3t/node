const express = require('express'), body_parser=require('body-parser')
var app = new express()

app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:true}))

var itemStore=['one','two']

//get all items
app.get('/item',(req,res)=>{
    res.json(itemStore)
})

//get item wieh specified id
app.get('/item/:id',(req,res)=>{
    res.json(itemStore[req.params.id])
})

//post new item
app.post('/item', (req,res)=>{
    itemStore.push(req.body.data)
    res.json(itemStore)
})

app.listen(3000,()=>{
    console.log(`server running`)
    console.log('\x1b[32mThis red')
})