//class declaration

class Employee {
    //here all variables are public by default
    id: number
    public name: string
    public salary: number
    public status: boolean
    //constructor
    constructor(id: number = 0, name: string = "", salary: number = 0, status: boolean = false) {
        this.id = id
        this.name = name
        this.salary = salary
        this.status = status
    }

    //instance methods
    public calculateSalary(nofoDays: number = 0): number {
        return this.salary * nofoDays
    }
}
//create instance
let employee = new Employee(12, 'Subramanian', 1000, true);
console.log(employee.id, employee.name, employee.salary, employee.status, employee.calculateSalary(12))