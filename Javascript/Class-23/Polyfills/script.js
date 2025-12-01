

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubleNums = nums.map((num) => num * 2);

// console.log(nums);
// console.log(doubleNums);

if (Array.prototype.map) {
    Array.prototype.map = function (logic) {
        const arr = this;

        const res = [];
        for (let val of arr) {
            res.push(logic(val));
        }
        return res;
    }
}

Array.prototype.myIndexOf = function (searchVal) {
    // this keyword will point to the array on which `myIndexOf` getting called.
    const arr = this;
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (item === searchVal) {
            return i;
        }
    }
    return -1;
}

const res = nums.map((num) => num * 2);

console.log(res);