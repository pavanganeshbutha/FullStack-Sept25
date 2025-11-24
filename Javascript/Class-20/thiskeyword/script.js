// 'use strict'

// Default binding
// Browser -> window
// NodeJS -> global
// console.log(this);


function fun() {
    console.log(this);
}

// === window.fun();
// fun(); 


const person = {
    name: 'Max',
    age: 20,
    sayHello: function () {
        console.log(this);
        return this.age;
    }
}

// console.log(person.sayHello());

const fn = person.sayHello;

// console.log(fn());


// magicNumber = 200;

// console.log(magicNumber);


// ---------------------------- explicit binding

const a = {
    m: 10,
    n: 'Hello'
}

function multiply(n, m) {
    console.log(this);
    return n * m;
}

// multiply();
// console.log(multiply.call(a, 10, 20));

function squareRoot(num, message) {
    console.log(this);
    console.log(message);
    console.log(this.m);
    return Math.sqrt(num);
}

const squareRootFn = squareRoot.bind(a);

// console.log(squareRootFn(10, "square root of 10"));

const b = {
    l: 10,
    m: 20,
    n: true
}

function cube(...numArr) {
    console.log(this);
    console.log(numArr);
    return numArr[0]**3;
}

const nums = [10, 20, 30, 40];

const cubeVal = cube.apply(b, nums);

console.log(cubeVal);


// Rest parameter
function max(...args) {
    console.log(args);
    return Math.max(...args);
}

// console.log(max(2, 3, 4, 10, 20, 30, 40, 50));












