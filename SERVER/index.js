"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var UserHistory = require("./model/UserHistory");
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
app.post('/user/history/update', function (req, res) {
    var userHistory = new UserHistory(req.body);
    var query = { user_id: req.body.user_id };
    UserHistory.findOne(query, function (err, data) {
        if (err) {
            res.json({ info: 'error during find User history', error: err });
        }
        ;
        if (data) {
            UserHistory.update({
                user_id: req.body.user_id
            }, {
                $push: {
                    history: req.body.history
                }
            }, function (err, doc) {
                if (!err) {
                    console.log(doc ? 'updated' : 'inserted');
                }
            });
        }
        else {
            userHistory.save(function (err) {
                if (err) {
                    res.json({ info: 'error during User history create', error: err });
                }
                res.json({ info: 'User history saved successfully', data: userHistory });
            });
        }
    });
});
app.get('/user/history/find/:user_id', function (req, res) {
    var query = { user_id: req.params.user_id };
    UserHistory.find(query, function (err, userHistory) {
        if (err) {
            res.json({ info: 'error during find User history', error: err });
        }
        ;
        if (userHistory) {
            res.json({ info: 'User history found successfully', data: userHistory });
        }
        else {
            res.json({ info: 'User history not found with id:' + req.params.user_id });
        }
    });
});
var eN = new Engine_1.Engine(app);
//# sourceMappingURL=index.js.map