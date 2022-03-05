export class People {
    private readonly credential: string = '';
    private orang2: string = 'RIAND PRATAMA';
    private orang3: string = 'HENDRO RAHMAT';
    name?: string;
    constructor(value: string) {
        this.credential = value;
    }

    orangJawa() {
        console.log('INI ORANG JAWA');
    }

    private daftarOrang() {
        console.log(`${this.credential}, ${this.orang2}, ${this.orang3}, ${this.name}`);
    }

    tampilOrang() {
        this.daftarOrang();
    }
}