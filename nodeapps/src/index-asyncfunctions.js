//async functions 

async function getValue() {
    return 10  // Promise.resolve(10)
}

function main() {
    let value = getValue()
    //console.log(value)
    value.then(res=>console.log(res))
}
main()