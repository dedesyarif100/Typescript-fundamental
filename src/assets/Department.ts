// class company 
type Department = {
    name: string
}

type Employee = {
    name: string
    age: number
}

const Data = {
    name: 'test',
    age: 23
}

class TeslaCompany {
    private static role = "Admin"
    private readonly credentials: string = ''
    private departments: Department[] = []
    private employees: Employee[] = []

    constructor(cred: string) {
        this.credentials = cred
    }

    addDepartment(value: Department) {
        this.departments = [...this.departments, value]
        console.log(`DEPARTMENT : ${value.name}`);
    }

    addEmployee(value: Employee) {
        this.employees = [...this.employees, value]
        // console.log(Data);
        // this.employees.push(value);
        console.log(`EMPLOYEE NAME : ${value.name}, AGE : ${value.age}`);
    }

    getEmployee() {
        console.log(this.employees);
    }
}

export class TeslaEmployee extends TeslaCompany {
    private new_employee: Employee = { name: '', age: 0}

    public setName(name: Employee): void {
        this.new_employee = name
        console.log(`NAME : ${this.new_employee.name}, AGE : ${this.new_employee.age}`);
    }
}

// const newTeslaEmployee = new TeslaEmployee('123456')
// newTeslaEmployee.setName({ name: 'Kevin Odongo', age: 36 })
// newTeslaEmployee.addDepartment({ name: 'Finance' })
// newTeslaEmployee.addEmployee({ name: 'Kevin Odongo', age: 36 })
// console.log(newTeslaEmployee)