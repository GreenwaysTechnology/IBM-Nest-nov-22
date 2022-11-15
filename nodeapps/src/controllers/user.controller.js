
class UserController {
    userService
    //dependency injection
    constructor(userService) {
        this.userService = userService
    }
    //apis 
    findAll() {
        return this.userService.findAll()
    }
    save() {
        return this.userService.save()
    }
    remove() {
        return this.userService.remove()
    }
    update() {
        return this.userService.update()
    }
}
module.exports = UserController;