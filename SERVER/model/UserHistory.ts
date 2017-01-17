import * as mongoose from "mongoose"

interface History {
    url: String,
    title: String,
    last_visit: String,
    visit_count: Number
}

interface IUserHistory {
    user_id: Number,
    history: History[]
}

interface IUserHistoryModel extends IUserHistory, mongoose.Document { }

var userHistorySchema = new mongoose.Schema({
    user_id: Number,
    history: [{
        url: String,
        title: String,
        last_visit: String,
        visit_count: Number
    }]
});

var UserHistory = mongoose.model<IUserHistoryModel>("UserHistory", userHistorySchema)

export = UserHistory