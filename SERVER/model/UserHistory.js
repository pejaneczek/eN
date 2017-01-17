"use strict";
var mongoose = require("mongoose");
var userHistorySchema = new mongoose.Schema({
    user_id: Number,
    history: [{
            url: String,
            title: String,
            last_visit: String,
            visit_count: Number
        }]
});
var UserHistory = mongoose.model("UserHistory", userHistorySchema);
module.exports = UserHistory;
//# sourceMappingURL=UserHistory.js.map