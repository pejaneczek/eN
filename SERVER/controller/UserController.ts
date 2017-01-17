import { User } from "../model/User"

export class UserController {

    constructor(private app: any /* TODO */) {

        /* Create */
        app.post('/user/create', function (req, res) {
            var userInstance = new User()

            userInstance.mongoModel.save((err) => {
                if (err) {
                    res.json({ info: 'error during User create', error: err })
                }
                res.json({ info: 'User saved successfully', data: userInstance })
            })
        })

        /* Find all */
        app.get('/user/findall', function (req, res) {
            var userInstance = new User()

            userInstance.mongoModel.find((err, Users) => {
                if (err) {
                    res.json({ info: 'error during find Users', error: err })
                }
                res.json({ info: 'Users found successfully', data: Users });
            })
        })

        /* Find one */
        app.get('/user/findone/:id', function (req, res) {
            var userInstance = new User()
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