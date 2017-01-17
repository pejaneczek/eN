import * as mongoose from "mongoose"

export interface IUser {
    first_name: String
    last_name: String
    email: String   
}

export interface IUserModel extends IUser, mongoose.Document { }