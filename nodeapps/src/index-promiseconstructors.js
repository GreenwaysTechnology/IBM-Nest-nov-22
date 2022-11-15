//promise constructors

//i want to return the data after 1000ms
function delay() {
    //if you want to convert any callback based apis into promise based 
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, 'Hello')
    })
}

function main() {
    delay()
        .then(response => console.log(response))
        .catch(err => console.log(err))
}
main()