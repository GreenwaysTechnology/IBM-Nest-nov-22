//async compostion - callback chaining
/**
 * getUser ---returns user after some dealy
 * based on user user 
 * login method -  takes user as input if user found - login validation
 * if login success
 * dashboard - shows who is that user?
 */
const getUser = (success, failure) => {
    //biz logic
    let user = {
        id: 1,
        name: 'admin'
    }
    //user = null
    if (user) {
        setTimeout(success, 1000, user)
    } else {
        setTimeout(failure, 1000, { message: 'User not found' })
    }
}
const login = (user, success, failure) => {
    if (user.name === 'admin') {
        setTimeout(success, 1000, 'login success')
    } else {
        setTimeout(failure, 1000, 'login failed')
    }
}
const showDashboard = (status, success, failure) => {
    if (status === 'login success') {
        setTimeout(success, 1000, 'You are admin')
    } else {
        setTimeout(failure, 1000, 'You are not authenticated')
    }
}

//main function
function main() {
    //callback as parameter
    getUser((user) => {
        console.log(user)
        //callback chaining
        login(user, (status) => {
            console.log(status)

            showDashboard(status, (page) => {
                console.log(page)
            }, (err) => {
                console.log(err)
            })
        }, (err) => {
            console.log(err)
        })
    }, err => {
        console.log(err)
    })
}
main()


