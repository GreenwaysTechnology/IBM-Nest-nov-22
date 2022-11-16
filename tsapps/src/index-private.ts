//

class Auth {
    private userName: string = "admin"
    private password:string ="admin"
    constructor() {

    }
    public getUserDetails(){
        return this.userName + this.password
    }
}
function main(){
  let auth = new Auth()
//  console.log(auth.userName)
 console.log(auth.getUserDetails());
 
}
main()