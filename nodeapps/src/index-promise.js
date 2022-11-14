
function blockMe(message) {
    console.log(message)
}

function delay() {
    return Promise.resolve('success') // return new Promise Object 
}
function main() {
    blockMe('start')
    delay().then(result => console.log(result))
    blockMe('end')
}
main()