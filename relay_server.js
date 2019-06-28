"use strict";
const servername = 'relay.usvsolutions.com'
const http = require('http')
const zlib = require('zlib');
const _ = require('lodash')

const TARGET_OPTIONS = {
    hostname: 'evs.techship.io',
    protocol: 'http:'
}

const server = http.createServer((req, res) => {
    console.log(`request is:` + req.url);
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, ' + req.headers['access-control-request-headers']) //allow whatever header the client is sending
    if (req.method === 'OPTIONS') {
        res.statusCode = 200
        return res.end()
    }
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
            res.write(collected_data, (err)=>{
                if (err){
                    console.error(`Error: ${err.message}`);
                }
                return res.end()
            })
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message)
        return res.end()
    });
}).listen(8080, servername)