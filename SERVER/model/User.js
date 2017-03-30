"use strict";
var mongoose = require("mongoose");
var User = (function () {
    function User() {
        var userSchema = mongoose.Schema({
            user_id: Number,
            first_name: String,
            last_name: String,
            email: String
        });
        this.mongoModel = mongoose.model('User', userSchema);
    }
    return User;
}());
exports.User = User;
