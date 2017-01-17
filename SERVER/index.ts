import * as express from "express"
import * as bodyParser from "body-parser"
import { Router, Request, Response } from 'express'
import {Engine} from "./kernel/Engine"


var app = express()
var path = require('path')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

/* / */
app.get('/', function (req, res) {
    res.cookie('eN', '1', {}) // TODO user id
    res.sendFile(path.join(__dirname + '/index.html'));
})

let eN = new Engine (app)



