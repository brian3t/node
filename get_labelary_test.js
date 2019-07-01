const grab_labelary = require('./get_labelary')
var zpl = "^xa^cfa,50^fo100,100^fdHello World^fs^xz";
grab_labelary(zpl, (data)=>{
    console.log(`got data now ${data}`)
})
