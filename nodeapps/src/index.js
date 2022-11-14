
function blockMe(message) {
    console.log(message)
}

function delay() {
    let user = {
        name: 'admin'
    }
    if (user.name == 'admin') {
        return Promise.resolve('login success')
    } else {
        return Promise.reject('login failed')
    }
}
function main() {
    blockMe('start')
    delay()
        .then(result => console.log(result))
        .catch(err => console.log(err))
    blockMe('end')
}
main()