class UserService {
    constructor() {

    }
    //biz methods
    findAll() {
        return "Find All users"
    }
}

class OrderService {
    constructor() {

    }
    //biz methods
    findAll() {
        return "Find All orders"
    }
}
class UserController {
    //has-a
    userService: UserService
    //dependcy injection;constructor injection
    constructor(userService: UserService) {
        this.userService = userService
    }
    //api
    get() {
        return this.userService.findAll()
    }
}
function main() {
  let usrCtrl = new UserController(new UserService())
  console.log(usrCtrl.get())
}
main()