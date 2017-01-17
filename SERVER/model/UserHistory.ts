import * as mongoose from "mongoose"
import { IUserHistory } from "./IUserHistory"

export class UserHistory implements IUserHistory {

    mongoModel: any // TODO

    url: String
    title: String
    last_visit: String
    visit_count: Number

    constructor () {
        var userHistorySchema = mongoose.Schema({
            user_id: Number,
            history: [{
                url: String,
                title: String,
                last_visit: String,
                visit_count: Number
            }]
        })

        this.mongoModel = mongoose.model('UserHistory', userHistorySchema)
    }
}