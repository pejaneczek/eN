import * as mongoose from "mongoose"

export interface IUserHistory {
    url: String,
    title: String,
    last_visit: String,
    visit_count: Number
}

export interface IUserHistoryModel extends IUserHistory, mongoose.Document { }