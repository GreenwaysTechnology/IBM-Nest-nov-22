//without code refactoring
// class Employee {
//     //here all variables are public by default
//     id: number
//     public name: string
//     public salary: number
//     public status: boolean
//     //constructor
//     constructor(id: number = 0, name: string = "", salary: number = 0, status: boolean = false) {
//         this.id = id
//         this.name = name
//         this.salary = salary
//         this.status = status
//     }
//     //instance methods
//     public calculateSalary(nofoDays: number = 0): number {
//         return this.salary * nofoDays
//     }
// }
// //with refactoring:you can remove variable declarations -level 0
// class Employee {
//     //constructor args by default are local variables, we can convert local variables
//     //instance variables by adding public or private keyword
//     constructor(public id: number = 0, public name: string = "", public salary: number = 0, public status: boolean = false) {
//         this.id = id
//         this.name = name
//         this.salary = salary
//         this.status = status
//     }
//     //instance methods
//     public calculateSalary(nofoDays: number = 0): number {
//         return this.salary * nofoDays
//     }
// }
//with refactoring:you can remove variable declarations -level 1
class Employee {
    //constructor args by default are local variables, we can convert local variables
    //instance variables by adding public or private keyword
    constructor(id = 0, name = "", salary = 0, status = false) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.status = status;
    }
    //instance methods
    calculateSalary(nofoDays = 0) {
        return this.salary * nofoDays;
    }
}
//create instance
let employee = new Employee(12, 'Subramanian', 1000, true);
console.log(employee.id, employee.name, employee.salary, employee.status, employee.calculateSalary(12));
