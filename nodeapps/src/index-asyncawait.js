//without then how to read value from the promise

//async functions 

async function getValue() {
    return 10  // Promise.resolve(10)
}

async function main() {
    let value = await getValue()
    console.log(value)
}
main()