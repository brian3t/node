"use strict";
const servername = 'relay.usvsolutions.com'
const http = require('http')
const zlib = require('zlib')
const querystring = require('querystring')
const _ = require('lodash')
const unirest = require("unirest");

const TARGET_OPTIONS = {
    hostname: 'evs.techship.io',
    protocol: 'http:'
}
const get_labelary = require('./get_labelary')

/**
 *
 * @param req the server's request
 * @param res the server's response
 */
const call_get_labelary = function (req, res) {
    let uri_params = req.url.split('/')
    let last_query_param = uri_params[2]//filename, `filename`, then encoded_zpl
    let file_type = uri_params[4]
    let raw_zpl = decodeURI(last_query_param)
    let buff = new Buffer(raw_zpl, 'base64');
    let raw_zpl_decoded = buff.toString('ascii');
    console.log(`zpl decoded: ${raw_zpl_decoded}`)
    get_labelary(raw_zpl_decoded, (data) => {
        return res.end(data)
    }, file_type)
}

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, ' + req.headers['access-control-request-headers']) //allow whatever header the client is sending
    if (req.method === 'OPTIONS') {
        res.statusCode = 200
        return res.end()
    }
    if (req.url === '/favicon.ico') return false
    console.log(`request is:` + req.url.slice(0, 25));
    if (req.url.startsWith('/get_labelary')) {
        return call_get_labelary(req, res)
    }

    res.setHeader('Content-Type', 'application/json') //we always return json, no matter what
    let modified_headers = req.headers
    modified_headers.accept = '*/*'
    modified_headers["cache-control"] = 'no-cache'
    modified_headers.host = TARGET_OPTIONS.hostname
    modified_headers['accept-encoding'] = 'gzip, deflate'
    modified_headers.connection = 'keep-alive'
    delete modified_headers.dnt
    delete modified_headers.referer
    const options = Object.assign(TARGET_OPTIONS, {
        path: '/api/v2' + req.url,
        headers: modified_headers,
        method: req.method
    })

// Make a request
    if (req.method === 'GET') {
        http.get(options, (resp) => {
            let collected_data = '';
            var gunzip = zlib.createGunzip();
            resp.pipe(gunzip)
            // gunzip = resp //ttodo uncomment this, and comment above, to temporary disable unzipping

            // A chunk of data has been received.
            gunzip.on('data', (chunk) => {
                collected_data += chunk;
            });

            // The whole response has been received. Return the result
            gunzip.on('end', () => {
                //copy all headers from target
                _.each(resp.headers, (header_value, header_name) => {
                    try {
                        res.setHeader(header_name, header_value)
                    } catch (e) {
                        console.log(`error setting header: ${e.toString()}`)
                    }
                })
                res.removeHeader('content-encoding') //we are not zipping this. Comment this line and below to enable zipping
                res.setHeader("content-type", 'application/json; charset=UTF-8')//not zipping
                // console.log(`data here: ${data}`);
                res.setHeader('content-length', collected_data.length)
                res.write(collected_data, (err) => {
                    if (err) {
                        console.error(`Error: ${err.message}`);
                    }
                    return res.end()
                })
            });
        }).on("error", (err) => {
            console.log("Error: " + err.message)
            return res.end()
        })
    } else if (req.method === 'POST' || req.method === 'PUT') {
        var body = [];
        req.on('data', function (chunk) {
            body.push(chunk);
        }).on('end', function () {
            body = Buffer.concat(body).toString();
            if (body) console.log(body)
            //body ready
            let body_decoded = decodeURI(body)

            //preparing unirest post request
            let post_url = TARGET_OPTIONS.protocol + '//' + TARGET_OPTIONS.hostname + '/api/v2' + req.url
            let uni_req = unirest(req.method, post_url);
            uni_req.headers(modified_headers);
            uni_req.type("json");
            let body_decoded_object = null
            try {
                body_decoded_object = JSON.parse(body_decoded)
            } catch (e) {

            }
            uni_req.send(body_decoded_object)
            uni_req.end(function (uni_res) {
                if (uni_res.error) {
                    res.statusCode = 500
                    console.error(`Error calling unirest ` + uni_res.error.toString());
                    return res.end(`{error: "Error calling unirest ${uni_res.error.toString()}"}`)
                }
                return res.end(JSON.stringify(uni_res.body));
            })
        })
    } else {
        return res.end()
    }
}).listen(8080, servername)