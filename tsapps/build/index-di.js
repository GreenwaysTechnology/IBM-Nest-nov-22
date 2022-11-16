class UserService {
    constructor() {
    }
    //biz methods
    findAll() {
        return "Find All users";
    }
}
class OrderService {
    constructor() {
    }
    //biz methods
    findAll() {
        return "Find All orders";
    }
}
class UserController {
    //dependcy injection;constructor injection
    constructor(userService) {
        this.userService = userService;
    }
    //api
    get() {
        return this.userService.findAll();
    }
}
function main() {
    let usrCtrl = new UserController(new UserService());
    console.log(usrCtrl.get());
}
main();
