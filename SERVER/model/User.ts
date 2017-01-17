import * as mongoose from "mongoose"
import { IUser } from "./IUser"

export class User implements IUser {

    mongoModel: any // TODO

    user_id: Number
    first_name: String
    last_name: String
    email: String

    constructor() {
        var userSchema = mongoose.Schema({
            user_id: Number,
            first_name: String,
            last_name: String,
            email: String,
        })

        this.mongoModel = mongoose.model('User', userSchema)
    }
}





