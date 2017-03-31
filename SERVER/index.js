"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var Engine_1 = require("./kernel/Engine");
var app = express();
var path = require('path');
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