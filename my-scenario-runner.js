"use strict";
var resolve = require("path").resolve;

const bunyan = require('bunyan')
const stackup = require("stackup");
const util = require('util')
const tap = require('tap')
var log = bunyan.createLogger({name: "sample"});

var scenario = require(resolve(process.cwd(), process.argv[2]));

scenario(tap);


let a = 1
// console.log(a)