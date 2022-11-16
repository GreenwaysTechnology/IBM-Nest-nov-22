//
class Auth {
    constructor() {
        this.userName = "admin";
        this.password = "admin";
    }
    getUserDetails() {
        return this.userName + this.password;
    }
}
function main() {
    let auth = new Auth();
    //  console.log(auth.userName)
    console.log(auth.getUserDetails());
}
main();
