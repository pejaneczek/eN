"use strict";
var UserController_1 = require("../controller/UserController");
var UserHistoryController_1 = require("../controller/UserHistoryController");
var Database_1 = require("./Database");
var Engine = (function () {
    function Engine(server /* TODO typ*/) {
        var _this = this;
        this.server = server;
        this.port = 3000;
        this.setupDatabase = function () {
            var MongoDB = new Database_1.Database();
        };
        this.setupControllers = function () {
            var eN = _this;
            var _userController = new UserController_1.UserController(eN.server);
            var _userHistoryController = new UserHistoryController_1.UserHistoryController(eN.server);
        };
        this.setupServer = function () {
            var eN = _this;
            var eNListener = eN.server.listen(eN.port, function (err) {
                if (err) {
                    eN.setupServer();
                    return;
                }
                console.log("eN listening on " + eN.port);
            }.bind(eN));
        };
        var eN = this;
        eN.setupDatabase();
        eN.setupControllers();
        eN.setupServer();
    }
    return Engine;
}());
exports.Engine = Engine;
