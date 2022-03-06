export class DataType1 {
    DataTypeBoolean() {
        let isDone: boolean = true;
        let isFalse: boolean = false;
        var tes = {name: 'dede', age: 22};
        console.log(tes);
    }

    DataTypeArray() {
        // LOOP WITH FOREACH ---------------------------------------------------
        let arrayNumber: number[] = [1, 2, 3, 4, 5, 6];
        let result = 0;
        arrayNumber.forEach((value) => {
            result = result + value;
        });
        console.log(result);

        let arrayNumber2: Array<number> = [11, 12, 13, 14, 15];
        let result2 = 0;
        function loop2(value: any) {
            result2 = result2 + value;
        }
        arrayNumber2.forEach(loop2);
        console.log(result2);

        // LOOP WITH MAP ------------------------------------------------------
        let arrayNumber3: Array<number> = [1, 2, 3, 4, 5, 6];
        let result3 = 0;
        const filter = arrayNumber3.map(loop3);
        function loop3(value: any) {
            return value * 4;
        }
        console.log(filter);

        let arrayNumber4: Array<number> = [1, 2, 3, 4, 5, 6];
        let result4 = 0;
        arrayNumber4.map((value) => {
            result4 += value;
        })
        console.log(result4);

        // LOOP WITH FILTER ------------------------------------------------------
        let arrayNumber5: Array<number> = [45, 4, 9, 16, 25];
        let result5 = arrayNumber5.filter((value) => {
            return value > 10;
        })
        console.log(result5);

        let arrayNumber6: Array<number> = [45, 4, 9, 16, 25];
        let result6 = arrayNumber6.filter(loop6);
        function loop6(value: any) {
            return value > 10;
        }
        console.log(result6);

        // LOOP WITH REDUCE ------------------------------------------------------
        let arrayNumber7: Array<number> = [1, 2, 3, 4, 5, 6];
        let result7 = arrayNumber7.reduce((total, value) => {
            return total + value;
        })
        console.log(result7);

        let arrayNumber8: Array<number> = [1, 2, 3, 4, 5, 6];
        let loop8 = (total: any, value: any) => {
            return total + value;
        }
        let result8 = arrayNumber8.reduce(loop8);
        console.log(result8);

        // LOOP WITH REDUCE ------------------------------------------------------
        let arrayNumber9: Array<number> = [10, 15, 20, 25, 30, 35];
        let result9 = arrayNumber9.every((value) => {
            return value > 10;
        })
        console.log(result9);
        
        // LOOP WITH INDEX OF ------------------------------------------------------
        let indexOfAbjad: Array<string> = ['A', 'B', 'C', 'D'];
        let position = indexOfAbjad.indexOf('C');
        console.log(position);

        let lastIndexOfAbjad: Array<string> = ['A', 'B', 'C', 'D'];
        let lastPosition = lastIndexOfAbjad.lastIndexOf('D');
        console.log(lastPosition);
        
        // LOOP WITH FIND ------------------------------------------------------
        let arrayNumber11: Array<number> = [5, 10, 15, 20, 25];
        let result11 = arrayNumber11.find((value) => {
            return value > 16;
        })
        console.log(result11);

        let arrayNumber12: Array<number> = [5, 10, 15, 20, 25];
        let result12 = (value: any) => {
            return value > 21;
        }
        let list = arrayNumber12.find(result12);
        console.log(list);
    }

    DataTypeTuple() {
        let x: [string, boolean, number, any[], {}];
        x = ['test', true, 22, [1, 'test', true], {name: 'dede', age: 22}];
        console.log(x);

        let y: {number: number, string: string, array: Array<any>, boolean: boolean, object: object};
        y = {number: 2, string: 'tes', array: [1, 'tes'], boolean: true, object: {name: 'dede', age: 25}};
        console.log(y);

        // function printId(id: number | string | any[]) {
        //     console.log(id);
        // }
        // printId([1, 'tes']);
    }

    ApplyDataType() {
        this.DataTypeBoolean();
        this.DataTypeArray();
    }
}