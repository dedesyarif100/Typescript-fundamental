"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ShoppingCart_1 = require("./assets/ShoppingCart");
const Department_1 = require("./assets/Department");
const Developer_1 = require("./assets/Developer");
const People_1 = require("./assets/People");
const DataType_1 = require("./assets/DataType");
const DataType1_1 = require("./assets/DataTypesChallenges/DataType1");
class Hewan extends People_1.People {
    constructor(value) {
        super(value);
        this.value1 = 11;
        this.value2 = 12;
        this.result = 0;
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
}
// INSTANCE CLASS HEWAN
const hewan = new Hewan('DEDE SYARIFUDIN');
hewan.anjing();
hewan.kucing();
hewan.calculate();
hewan.orangJawa();
hewan.tampilOrang();
// INSTANCE CLASS SHOPPING CART
const cart = new ShoppingCart_1.ShoppingCart();
cart.getCartNum();
// INSTANCE CLASS TESLA EMPLOYEE
const newTeslaEmployee = new Department_1.TeslaEmployee('TESLA EMPLOYEE');
newTeslaEmployee.setName({ name: 'Kevin Odongo', age: 36 });
newTeslaEmployee.addDepartment({ name: 'Finance' });
newTeslaEmployee.addEmployee({ name: 'Kevin Odongo', age: 36 });
newTeslaEmployee.addEmployee({ name: 'DEDE', age: 25 });
newTeslaEmployee.getEmployee();
// INSTANCE CLASS DEVELOPER
const developer = new Developer_1.Developer;
developer.develop();
developer.reactJs();
const dataType = new DataType_1.DataType;
dataType.DataTypeUnknown();
dataType.DataTypeAny();
dataType.DataTypeVoid();
dataType.DataTypeNever();
const dataType1 = new DataType1_1.DataType1;
dataType1.ApplyDataType();
dataType1.DataTypeTuple();
