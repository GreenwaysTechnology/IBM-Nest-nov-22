//undefined: implicit and explicit
//any

//implicit undefined
let a;
console.log(a)
a = "hello"
console.log(a)
a = 90
console.log(a)

//explicit undefined
let b: undefined = undefined
console.log(b)
//b = "hello"
console.log(b)
//if you want to use javascript behaviour , you can use any
//any : very usefull incase you dont know the type of variable in advance...

let c: any = 10
console.log(c)
c ="hello"
console.log(c)

