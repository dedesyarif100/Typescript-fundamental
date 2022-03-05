"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.People = void 0;
class People {
    constructor(value) {
        this.credential = '';
        this.orang2 = 'RIAND PRATAMA';
        this.orang3 = 'HENDRO RAHMAT';
        this.credential = value;
    }
    orangJawa() {
        console.log('INI ORANG JAWA');
    }
    daftarOrang() {
        console.log(`${this.credential}, ${this.orang2}, ${this.orang3}, ${this.name}`);
    }
    tampilOrang() {
        this.daftarOrang();
    }
}
exports.People = People;
