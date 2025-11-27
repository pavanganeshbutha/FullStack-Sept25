

function Payment(status, amount) {
    // properties of payment
    this.id = "TXN" + Math.floor(Math.random() * 100000 + 1000);
    this.status = status;
    this.amount = amount;
    this.paymentMode = 'card';

    // instance behaviours/methods
    this.getStatus = function () {
        return this.status;
    }

    this.setAmount = function (newAmount) {
        this.amount = newAmount;
    }
}

const p1 = new Payment('IN_PROGRESS', 200);
const p2 = new Payment('SUCCESS', 500);


function Car(name, price, color) {
    this.name = name;
    this.price = price;
    this.color = color;
}

/*

    this -- -> {
        name:'BMW',
        price: 9999,
        color: 'red',
        topSpeed: 400,
        isDiscBrake: true
    } //racing car object 

*/
function RacingCar(name, price, color, topSpeed, isDiscBrake) {
    
    Car.call(this, name, price, color)
    
    this.topSpeed = topSpeed;
    this.isDiscBrake = isDiscBrake;
}

// const c1 = new Car("BMW", 1000, 'red');

const r1 = new RacingCar('BMW', 9999, 'red', 400, true);




