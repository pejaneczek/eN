"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var Engine_1 = require("./kernel/Engine");
var app = express();
var mongoose = require('mongoose');
var path = require('path');
mongoose.connect("mongodb://admin:admin@ds159208.mlab.com:59208/en");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
/* / */
app.get('/', function (req, res) {
    res.cookie('eN', '1', {}); // TODO user id
    res.sendFile(path.join(__dirname + '/index.html'));
});
var eN = new Engine_1.Engine(app);
//# sourceMappingURL=index.js.map