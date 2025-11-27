

class Car{
    constructor(name, price, color) {
        this.name = name;
        this.price = price;
        this.color = color;
    }

    // getter and setters - These are the methods used to get and set individual properties 

    get getName() {
        return this.name;
    }

    get getPrice() {
        return this.price.toFixed(2);
    }

    set setPrice(newPrice) {
        if (newPrice < 0) {
            throw new Error('Invalid price');
        }
        this.price = newPrice;
    }

    // instance method
    displayCar() {
        console.log('---------');
        console.log(this.name);
        console.log(this.color);
        console.log(this.price);
        console.log('----------');
    }
}

class RacingCar extends Car{
    constructor(name, price, color, topSpeed, isDiscBrake) {
        super(name, price, color);
        this.topSpeed = topSpeed;
        this.isDiscBrake = isDiscBrake;
    }
}

const c1 = new Car('Audi', 8888, 'black');
const c2 = new Car('Ferrari', 77777, 'red');

const r1 = new RacingCar('Porche', 77777, 'yellow', 400, true);


class Person{

    static country = 'India';

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static sayHello() {
        console.log('Hello from Person class')
    }
}

const p1 = new Person('Max', 25);


