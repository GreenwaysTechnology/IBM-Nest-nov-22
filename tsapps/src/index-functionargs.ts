//implicit any
// function sayHello(name) {
//   console.log(name)
// }
//explicit any
function sayHello(name: any) {
    console.log(name)
}
sayHello('subramanian')
//sayHello() An argument for 'name' was not provided.
sayHello(10)

//default args
function add(a: number = 0, b: number = 0) {
    let c: number = a + b
    console.log(c)
}
add(10, 10)
// add("10","10")
add() //undefined,undefined 

//optional args : ts features , we can ommit parameters
function get(host: string = "localhost", port: number = 3000, url?: string) {
    let path = `http://${host}:${port}/${url}`
    console.log(path)
}
get('ibm',8080,"users")
get()
get("google",9000,undefined)