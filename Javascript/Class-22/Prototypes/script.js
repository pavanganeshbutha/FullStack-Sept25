

// const person = {
//     name: 'Max',
//     age: 21
// }

// const a = Object.create(person);

// a.name = 'John';

// const b = Object.create(a);

// b.name = 'Tommy';


function Car(name, price) {
    this.name = name;
    this.price = price;
}

Car.prototype.displayCar = function () {
    console.log("--------------");
    console.log(this.name);
    console.log(this.price);
    console.log("--------------");
}

const c1 = new Car("BMW", 100);

const c2 = new Car("Ferrari", 200);


class Vehicle {
    constructor(color, tyres) {
        this.color = color;
        this.tyres = tyres;
    }

    displayVehicle() {
        console.log("--------------");
        console.log(this.color);
        console.log(this.tyres);
        console.log("--------------");
    }
}

const v1 = new Vehicle('black', 4);
