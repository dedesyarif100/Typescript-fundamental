"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeslaEmployee = void 0;
const Data = {
    name: 'test',
    age: 23
};
class TeslaCompany {
    constructor(cred) {
        this.credentials = '';
        this.departments = [];
        this.employees = [];
        this.credentials = cred;
    }
    addDepartment(value) {
        this.departments = [...this.departments, value];
        console.log(`DEPARTMENT : ${value.name}`);
    }
    addEmployee(value) {
        this.employees = [...this.employees, value];
        // console.log(Data);
        // this.employees.push(value);
        console.log(`EMPLOYEE NAME : ${value.name}, AGE : ${value.age}`);
    }
    getEmployee() {
        console.log(this.employees);
    }
}
TeslaCompany.role = "Admin";
class TeslaEmployee extends TeslaCompany {
    constructor() {
        super(...arguments);
        this.new_employee = { name: '', age: 0 };
    }
    setName(name) {
        this.new_employee = name;
        console.log(`NAME : ${this.new_employee.name}, AGE : ${this.new_employee.age}`);
    }
}
exports.TeslaEmployee = TeslaEmployee;
// const newTeslaEmployee = new TeslaEmployee('123456')
// newTeslaEmployee.setName({ name: 'Kevin Odongo', age: 36 })
// newTeslaEmployee.addDepartment({ name: 'Finance' })
// newTeslaEmployee.addEmployee({ name: 'Kevin Odongo', age: 36 })
// console.log(newTeslaEmployee)
