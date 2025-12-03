

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(num) {
    return num % 2 === 0;
}

const evenNums = nums.filter(isEven);

// console.log(evenNums);

Array.prototype.myFilter = function (callbackFn) {
    const arr = this;
    if (!Array.isArray(arr)) {
        throw new TypeError('Invalid iterable');
    }
    if (typeof callbackFn !== 'function') {
         throw new TypeError('Invalid function params');
    }

    const res = [];

    // iterate over the array
    for (let element of arr) {
        if (callbackFn(element)) {
            res.push(element);
        }
    }
    return res;
}

console.log(nums.myFilter(isEven));

console.log(nums.myFilter((num) => num % 2 !== 0));

