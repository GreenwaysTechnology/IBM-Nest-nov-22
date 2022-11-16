function Course(info: any) {
    return function (target: any) {
        //inject propert into target(Student)
        Object.defineProperty(target.prototype, "courseinfo", { value: info })
    }
}


@Course({ course: 'Nest with Ts', duration: '40hrs' })
// @Cost 
// @Logger
class Student {
    constructor(public name: string) { }
}
let student = new Student('Subramanian') as any
console.log(`${student.name} is learning ${student.courseinfo.course}`)
