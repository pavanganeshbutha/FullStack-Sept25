

const bike = {
    name: 'Yamaha',
    price: 2000
}

function cube(num) {
    console.log(this);
    return num ** 3;
}

const f = cube.bind(bike);

// cube(10);
// f();

// console.log(f(3));



// Its returns --> function
// arguments --> customObj
// Returned method should also accept the parameters as the original function

Function.prototype.myBind = function (customObj) {
    const fn = this; //this is the cube function
    return function (...args) { //I am using a rest parameters to collect the argument
        customObj.__fn__ = fn;
        const res = customObj.__fn__(...args);
        delete customObj.__fn__;
        return res;
    }
}

const f2 = cube.myBind(bike);

console.log(f2(4));

