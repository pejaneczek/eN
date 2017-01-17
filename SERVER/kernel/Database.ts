var mongoose = require('mongoose')
import { Config } from "./Config"

export class Database  {

    constructor () {
        this.connectMongo()
    }

    private connectMongo = () => {
       mongoose.connect('mongodb://' + Config.DatabaseUserName + ":" + 
       Config.DatabaseUserName + '@' + Config.DatabaseLocation)
    }
}