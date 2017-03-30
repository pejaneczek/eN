"use strict";
var mongoose = require("mongoose");
var UserHistory = (function () {
    function UserHistory() {
        var userHistorySchema = mongoose.Schema({
            user_id: Number,
            history: [{
                    url: String,
                    title: String,
                    last_visit: String,
                    visit_count: Number
                }]
        });
        this.mongoModel = mongoose.model('UserHistory', userHistorySchema);
    }
    return UserHistory;
}());
exports.UserHistory = UserHistory;
