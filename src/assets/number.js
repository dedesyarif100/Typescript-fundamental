// Defining class in a Traditional Way.
function Vehicle(name,maker,engine) {
	this.name = name;
	this.maker = maker;
	this.engine = engine;
    this.tes = 'tes';

    this.panggil = function() {
        this.name = 'panggil';
        return this.name;
    }
};

Vehicle.prototype.getDetails = function(){
	console.log('The name of the bike is '+ this.name);
}

let bike1 = new Vehicle('Hayabusa','Suzuki','1340cc');
let bike2 = new Vehicle('Ninja','Kawasaki','998cc');

console.log(bike1.name);
console.log(bike2.maker);
console.log(bike1.tes);
console.log(bike1.panggil());
// console.log(bike1.getDetails());
