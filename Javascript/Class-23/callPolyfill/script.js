

const obj = {
    name: 'Max',
    age: 25
}

function fun(x, y) {
    console.log(this);
    console.log(10);
    console.log(20);
}

// fun.call(obj, 10, 20);

Function.prototype.myCall = function (thisArg, ...args) {
    thisArg.fn = this;
    const res = thisArg.fn(...args);
    delete thisArg.fn;
    return res;
}

fun.myCall(obj, 10, 20);

const person = {
    name: 'John'
}

function add(a,b) {
    console.log(this);
}

add.myCall(person, 20, 30);