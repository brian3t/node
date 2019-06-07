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
        let unixtime = Math.floor(new Date())

        if (req.method !== 'GET') {
            return res.end('oh no GET only')
        }
        res.writeHead(200, {'Content-Type': 'application/json'})

        let url_parts = url.parse(req.url, true).query
        if (! url_parts.iso) {
            return res.end('I need iso')
        }
        let iso_ts = url_parts.iso
        let date = new Date(iso_ts)
        let url_pathname = url.parse(req.url, true).pathname
        let url_path_parts = url_pathname.split('/')
        url_path_parts.shift() //remove preceding slash
        let url_path_part_1 = url_path_parts.shift()
        if (url_path_part_1 !== 'api') {
            return res.end('We need /api')
        }
        let url_path_part_2 = url_path_parts.shift()
        if (! url_path_part_2) {
            return res.end('malformed url')
        }
        switch (url_path_part_2) {
            case 'parsetime': {
                let hour = date.getHours()
                let reply_object = {
                    hour: hour,
                    minute: date.getMinutes(),
                    second: date.getSeconds()
                }
                return res.end(JSON.stringify(reply_object))
            }
            case 'unixtime': {
                let date = new Date()
                return res.end(JSON.stringify({
                    unixtime: date.getTime()
                }))
            }
            default:
                return res.end('')
        }

        return res
    })

server.listen(port_num)
// server.listen(8000)