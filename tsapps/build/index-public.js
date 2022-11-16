//class declaration
class Employee {
    //constructor
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
