export class DataType {
    DataTypeBoolean() {
        let isDone: boolean = false;
        var tes = 'tes';
    }    

    DataTypeNumber() {
        let decimal: number = 6;
        let big: number = 10000000000000000;
    }

    DataTypeString() {
        let fullname: string = "Dede Syarifudin";
        let age: number = 25;
        let sentence: string = `Hello, ${fullname}. I'll be ${age} years old`;
    }

    DataTypeArray() {
        let list: number[] = [1, 2, 3];
        let lists: Array<number> = [1, 2, 3];
    }

    DataTypeTuple() {
        let x: [string, number, number[]];
        x = ['test', 20, [20, 22]];
        console.log(x[0].substring(1));
    }

    DataTypeEnum() {
        enum Color {
            Red, Green, Blue
        }
        let red: Color = Color.Red;
        let green: Color = Color.Green;
        let blue: Color = Color.Blue;

        enum Angka {
            Satu = 1,
            Dua = 2,
            Tiga = 3
        }
        let number: Angka = Angka.Satu;

        enum Number {
            Firstnumber = 11,
            Twonumber = 22,
        }
        let NumOne: string = Number[0];
        let NumTwo: string = Number[1];
    }

    DataTypeUnknown() {
        let notSure: unknown = 4;
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

        let looselyTyped: any = {};
        // let d = looselyTyped.b;
    }

    DataTypeVoid() {
        function warnUser(): void {
            console.log("This is my warning message");
        }
        warnUser();
        let unusable: void = undefined;
        // OK if `--strictNullChecks` is not given
        unusable = undefined;
    }

    DataTypeNever() {
        function error(message: string): never {
            throw new Error(message);
        }

        function fail() {
            return error("Something failed");
        }
    }

    DataTypeObject() {
        declare function create(o: object | null): void;
        create({prop: 0});
    }

    DataTypeAssertions() {
        
    }
}