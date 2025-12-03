const nums = [1, 2, 3, 4, 5];

const square = (num) => {
    return num ** 2;
}

// [1, 4, 9, 16, 25]
const res = nums.map(square);

Array.prototype.myMap = function (callbackFn) {
    const arr = this;
    if (!Array.isArray(arr)) {
        throw new TypeError('parameter passed is not an array');
    }
    if (typeof callbackFn !== 'function') {
         throw new TypeError('callback passed is not a function');
    }

    const res = [];

    for (let item of arr) {
        const computedVal = callbackFn(item)
        res.push(computedVal);
    }

    return res;
}

// console.log(myMap(nums, square))

const numsCube = nums.myMap((num) => num ** 3);

console.log(numsCube);