

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

Function.prototype.myCall = function (customObj, ...args) {
    customObj.__fn__ = this;
    const res = customObj.__fn__(...args);
    delete customObj.__fn__;
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