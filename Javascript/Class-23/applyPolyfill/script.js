
const car = {
    name: 'BMW',
    price: 100
}

const nums = [1, 2, 3, 4, 5, 6];

function add(a,b,c) {
    console.log(this);
    console.log(a);
    console.log(b);
    console.log(c);
}

// add(10, 20, 30);

// add.apply(car, nums);

Function.prototype.myApply = function (customObj, args) {
    customObj.__fn__ = this;
    const res = customObj.__fn__(...args);
    delete customObj.__fn__;
    return res;
}

add.myApply(car, nums);

