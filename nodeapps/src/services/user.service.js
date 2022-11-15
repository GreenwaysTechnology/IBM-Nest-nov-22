
class UserService {
    constructor() { }
    //apis 
    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, 'users')
        })
    }
    save() {
        return 'user saved'
    }
    remove() {
        return 'user removed'
    }
    update() {
        return 'user updated'
    }
}
module.exports = UserService //share the class 
//module.exports = new UserService() //share the object , so that this step can be avoided in antoher place