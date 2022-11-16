
//simple decorator
//target is variable , holds object on which the decorator attached
function Course(target: any) {
    //inject propert into target(Student)
    Object.defineProperty(target.prototype, "course", { value: "Nest" })
}


@Course
class Student {
    constructor(public name: string) { }
}
let student = new Student('Subramanian') as any
console.log(`${student.name} is learning ${student.course}`)
