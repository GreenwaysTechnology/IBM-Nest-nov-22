const UserController = require("./controllers/user.controller")
const UserService = require("./services/user.service")



async function main() {
    const userCtrl = new UserController(new UserService())
    try {
        console.log(await userCtrl.findAll())
    }
    catch (err) {
        console.log(err);
    }
}
main()