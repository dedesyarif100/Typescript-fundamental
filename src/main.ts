import {ShoppingCart} from './assets/ShoppingCart';
import {TeslaEmployee} from './assets/Department';
import {Developer} from './assets/Developer';
import {People} from './assets/People';
import { DataType } from './assets/DataType';

class Hewan extends People {
    value1: number = 11;
    value2: number = 12;
    result: number = 0;
    constructor(value: string) {
        super(value);
        console.log('HALLO DEDE');
    }

    calculate() {
        this.result = this.value1 + this.value2;
        console.log(this.result);
    }

    anjing() {
        console.log('ANJING');
    }

    kucing() {
        console.log('KUCING');
    }

    // number() {
    //     console.log(a);
    //     var a = 1;

    //     console.log(b);
    //     let b = 2;
    // }
}

// INSTANCE CLASS HEWAN
const hewan = new Hewan('DEDE SYARIFUDIN');
hewan.anjing();
hewan.kucing();
hewan.calculate();
hewan.orangJawa();
hewan.tampilOrang();

// INSTANCE CLASS SHOPPING CART
const cart= new ShoppingCart();
cart.getCartNum();

// INSTANCE CLASS TESLA EMPLOYEE
const newTeslaEmployee = new TeslaEmployee('TESLA EMPLOYEE');
newTeslaEmployee.setName({ name: 'Kevin Odongo', age: 36 });
newTeslaEmployee.addDepartment({ name: 'Finance' })
newTeslaEmployee.addEmployee({ name: 'Kevin Odongo', age: 36 })
newTeslaEmployee.addEmployee({ name: 'DEDE', age: 25 })
newTeslaEmployee.getEmployee();

// INSTANCE CLASS DEVELOPER
const developer = new Developer;
developer.develop();
developer.reactJs();


const dataType = new DataType;
dataType.DataTypeUnknown();