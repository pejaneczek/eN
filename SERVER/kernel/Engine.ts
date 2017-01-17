import { UserController } from "../controller/UserController"
import { UserHistoryController } from "../controller/UserHistoryController"
import { Database } from "./Database"

export class Engine {

    public port: number = 3000

    constructor(private server: any /* TODO typ*/) {
        var eN = this

        eN.setupDatabase()
        eN.setupControllers()
        eN.setupServer()
    }

    private setupDatabase = (): void => {
        var MongoDB = new Database()
    }

    private setupControllers = (): void => {
        var eN = this
        var _userController = new UserController(eN.server)
        var _userHistoryController = new UserHistoryController(eN.server)
    }

    private setupServer = (): void => {
        var eN = this
        var eNListener = eN.server.listen(eN.port, function (err) {
            if (err) {
                eN.setupServer()
                return
            }
            console.log("eN listening on " + eN.port)
        }.bind(eN))
    }
}