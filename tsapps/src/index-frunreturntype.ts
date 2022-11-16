//reutrn type by default would be type inferenced based on the value what we return
function getName() {
    return "Subramanian"
}
console.log(getName())

function getAge(): number {
    return 10
}
function getValue(): any {
    return "test"
}
console.log(getAge(), getValue())

function doStuff(): void {
   console.log('test')
   //return 90
}