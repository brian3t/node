const request = require('request');

// var zpl = "^xa^cfa,50^fo100,100^fdHello World^fs^xz";

var options = {
    encoding: null,
    url: 'http://api.labelary.com/v1/printers/8dpmm/labels/4x6/0/' // adjust print density (8dpmm), label width (4 inches), label height (6 inches), and label index (0) as necessary
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
        return cb(body)
    });
}
module.exports = grab_labelary