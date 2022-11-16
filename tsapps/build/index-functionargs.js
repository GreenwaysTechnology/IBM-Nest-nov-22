//implicit any
// function sayHello(name) {
//   console.log(name)
// }
//explicit any
function sayHello(name) {
    console.log(name);
}
sayHello('subramanian');
//sayHello() An argument for 'name' was not provided.
sayHello(10);
//default args
function add(a = 0, b = 0) {
    let c = a + b;
    console.log(c);
}
add(10, 10);
// add("10","10")
add(); //undefined,undefined 
//optional args : ts features , we can ommit parameters
function get(host = "localhost", port = 3000, url) {
    let path = `http://${host}:${port}/${url}`;
    console.log(path);
}
get('ibm', 8080, "users");
get();
get("google", 9000, undefined);
