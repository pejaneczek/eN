"use strict";
var User_1 = require("../model/User");
var UserController = (function () {
    function UserController(app /* TODO */) {
        this.app = app; /* TODO */
        /* Create */
        app.post('/user/create', function (req, res) {
            var userInstance = new User_1.User();
            userInstance.mongoModel.save(function (err) {
                if (err) {
                    res.json({ info: 'error during User create', error: err });
                }
                res.json({ info: 'User saved successfully', data: userInstance });
            });
        });
        /* Find all */
        app.get('/user/findall', function (req, res) {
            var userInstance = new User_1.User();
            userInstance.mongoModel.find(function (err, Users) {
                if (err) {
                    res.json({ info: 'error during find Users', error: err });
                }
                res.json({ info: 'Users found successfully', data: Users });
            });
        });
        /* Find one */
        app.get('/user/findone/:id', function (req, res) {
            var userInstance = new User_1.User();
            var query = { id: req.params.id };
            userInstance.mongoModel.findOne(query, function (err, User) {
                if (err) {
                    res.json({ info: 'error during find User', error: err });
                }
                ;
                if (User) {
                    res.json({ info: 'User found successfully', data: User });
                }
                else {
                    res.json({ info: 'User not found with id:' + req.params.id });
                }
            });
        });
    }
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map