"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var Config_1 = require("./Config");
var Database = (function () {
    function Database() {
        this.connectMongo = function () {
            mongoose.connect('mongodb://' + Config_1.Config.DatabaseUserName + ":" +
                Config_1.Config.DatabaseUserName + '@' + Config_1.Config.DatabaseLocation);
        };
        this.connectMongo();
    }
    return Database;
}());
exports.Database = Database;
//# sourceMappingURL=Database.js.map