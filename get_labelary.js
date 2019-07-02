const request = require('request');
const fs = require('fs')

// var zpl = "^xa^cfa,50^fo100,100^fdHello World^fs^xz";

var options = {
    encoding: null,
    url: 'http://api.labelary.com/v1/printers/8dpmm/labels/4x6/0/', // adjust print density (8dpmm), label width (4 inches), label height (6 inches), and label index (0) as necessary
    headers:{
        'Content-Type': 'image/png'
    }
};

/**
 * grab a label from labelary
 * @param rawzpl
 * @param cb callback
 * @param expect_datatype pdf or png
 */
const grab_labelary = function (rawzpl, cb, expect_datatype = 'png') {
    options.formData = {file: rawzpl}
    if (expect_datatype === 'pdf') {
        options.headers = {'Accept': 'application/pdf'}
    }
    return request.post(options, function (err, resp, body) {
        if (err) {
            return false;
        }
        fs.writeFile('label_fr_labelary.png', body, (err)=>{
            if (err) throw err
            console.log(`Saved debugging file. To view: xnview label_fr_labelary.png`)
        })
        // let body_in_base64 = Buffer.from(body).toString('base64')
        // return cb(body_in_base64)
        return cb(body)
    });
}
module.exports = grab_labelary