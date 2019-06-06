'use strict';

const fs = require('fs');
const path = require('path');
const http = require('http');
const bl = require('bl')
const map = require('through2-map')
const url = require('url')

const net = require('net')
let port_num = process.argv[2]

function zero_fill(input) {
    return String(input).padStart(2, '0')
}


let server = http.createServer(
    (req, res) => {
        if (req.method !== 'GET'){
            return res.end('oh no GET only')
        }
        res.writeHead(200, { 'Content-Type': 'application/json' })

        if (req.url.slice(0,4) !== '/api'){
            return res.end('We need /api')
        }
        let url_parts = url.parse(req.url, true).query


        req.pipe(map(
            (chunk) => {
                return chunk.toString().toUpperCase()
            }
        )).pipe(res)

        return res
    })

server.listen(port_num)
// server.listen(8000)