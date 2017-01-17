import * as express from "express"
import * as bodyParser from "body-parser"
import * as User from "./model/User"
import * as UserHistory from "./model/UserHistory"
import { Router, Request, Response } from 'express'
import {Engine} from "./kernel/Engine"


var app = express()
var mongoose = require('mongoose')
var path = require('path')

mongoose.connect("mongodb://admin:admin@ds159208.mlab.com:59208/en")

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



