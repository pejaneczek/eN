import { User } from "../model/User"
import * as mongoose from "mongoose"

export class UserController {

    constructor(private app: any /* TODO */) {
        var userInstance = new User()

        /* Create */
        app.post('/user/create', function (req, res) {

            userInstance.mongoModel.save((err) => {
                if (err) {
                    res.json({ info: 'error during User create', error: err })
                }
                res.json({ info: 'User saved successfully', data: userInstance })
            })
        })

        /* Find all */
        app.get('/user/findall', function (req, res) {
            userInstance.mongoModel.find((err, Users) => {
                if (err) {
                    res.json({ info: 'error during find Users', error: err })
                }
                res.json({ info: 'Users found successfully', data: Users });
            })
        })

        /* Find one */
        app.get('/user/findone/:id', function (req, res) {
            var query = { id: req.params.id }
            
            userInstance.mongoModel.findOne(query, function (err, User) {
                if (err) {
                    res.json({ info: 'error during find User', error: err })
                };
                if (User) {
                    res.json({ info: 'User found successfully', data: User })
                } else {
                    res.json({ info: 'User not found with id:' + req.params.id })
                }
            })
        })

    }
}