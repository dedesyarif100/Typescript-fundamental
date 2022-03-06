"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataType = void 0;
class DataType {
    DataTypeBoolean() {
        let isDone = false;
        var tes = 'tes';
    }
    DataTypeNumber() {
        let decimal = 6;
        let big = 10000000000000000;
    }
    DataTypeString() {
        let fullname = "Dede Syarifudin";
        let age = 25;
        let sentence = `Hello, ${fullname}. I'll be ${age} years old`;
    }
    DataTypeArray() {
        let list = [1, 2, 3];
        let lists = [1, 2, 3];
    }
    DataTypeTuple() {
        let x;
        x = ['test', 20, [20, 22]];
        console.log(x[0].substring(1));
    }
    DataTypeEnum() {
        let Color;
        (function (Color) {
            Color[Color["Red"] = 0] = "Red";
            Color[Color["Green"] = 1] = "Green";
            Color[Color["Blue"] = 2] = "Blue";
        })(Color || (Color = {}));
        let red = Color.Red;
        let green = Color.Green;
        let blue = Color.Blue;
        let Angka;
        (function (Angka) {
            Angka[Angka["Satu"] = 1] = "Satu";
            Angka[Angka["Dua"] = 2] = "Dua";
            Angka[Angka["Tiga"] = 3] = "Tiga";
        })(Angka || (Angka = {}));
        let number = Angka.Satu;
        let Number;
        (function (Number) {
            Number[Number["Firstnumber"] = 11] = "Firstnumber";
            Number[Number["Twonumber"] = 22] = "Twonumber";
        })(Number || (Number = {}));
        let NumOne = Number[0];
        let NumTwo = Number[1];
    }
    DataTypeUnknown() {
        let notSure = 4;
        notSure = "maybe a string instead";
        console.log(notSure);
        notSure = false;
    }
    DataTypeAny() {
        // function getValue(key: string): any;
        // const str: string = getValue("my string");
        // let looselyTyped: any = 4;
        // looselyTyped.toFixed();
        // console.log(looselyTyped.toFixed());
        let looselyTyped = {};
        // let d = looselyTyped.b;
    }
    DataTypeVoid() {
        function warnUser() {
            console.log("This is my warning message");
        }
        warnUser();
        let unusable = undefined;
        // OK if `--strictNullChecks` is not given
        unusable = undefined;
    }
    DataTypeNever() {
        function error(message) {
            throw new Error(message);
        }
        function fail() {
            return error("Something failed");
        }
    }
    DataTypeObject() {
        create({ prop: 0 });
    }
    DataTypeAssertions() {
    }
}
exports.DataType = DataType;
