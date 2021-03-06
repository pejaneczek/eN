import { UserHistory } from "../model/UserHistory"

export class UserHistoryController {

    constructor(private app: any /* TODO */) {

        app.post('/user/history/update', function (req, res) {
            var userHistoryInstance = new UserHistory()
            var query = { user_id: req.body.user_id }

            userHistoryInstance.mongoModel.findOne(query, function (err, data) {
                if (err) {
                    res.json({ info: 'error during find User history', error: err })
                };
                if (data) {
                    userHistoryInstance.mongoModel.update({
                        user_id: req.body.user_id
                    }, {
                            $push: {
                                history: req.body.history
                            }
                        }, function (err, doc) {
                            if (!err) {
                                console.log(doc ? 'updated' : 'inserted')
                            }
                        });
                } else {
                    userHistoryInstance.mongoModel.save((err) => {
                        if (err) {
                            res.json({ info: 'error during User history create', error: err })
                        }
                        res.json({ info: 'User history saved successfully', data: userHistoryInstance })
                    })
                }
            })
        })

        app.get('/user/history/find/:user_id', function (req, res) {
            var userHistoryInstance = new UserHistory()
            var query = { user_id: req.params.user_id }

            userHistoryInstance.mongoModel.find(query, function (err, userHistory) {
                if (err) {
                    res.json({ info: 'error during find User history', error: err })
                };
                if (userHistory) {
                    res.json({ info: 'User history found successfully', data: userHistory })
                } else {
                    res.json({ info: 'User history not found with id:' + req.params.user_id })
                }
            })
        })
    }
}