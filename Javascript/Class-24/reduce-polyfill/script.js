

const nums = [1, 2, 3, 4, 5];

const sum = nums.reduce((acc, curr) => acc + curr, 0);

// console.log(sum);


/*

    callbackFn(acc, curr)
    @params - acc
    @params - curr

*/

Array.prototype.myReduce = function (callbackFn, initialVal) {

    const arr = this;
    // create a accumulator with initial value if present, otherwise initialise with first array value
    let acc = initialVal ? initialVal : arr[0];
    const startIndex = initialVal ? 0 : 1;
    
    for (let i = startIndex; i < arr.length; i++) {
        // grab the current value of the array
        const curr = arr[i];
        // call the callback containing logic to be performed on `acc` and `curr`.
        acc = callbackFn(acc, curr);
    }
    return acc;
}

console.log(nums.myReduce((acc, curr) => acc + curr));
console.log(nums.myReduce((acc, curr) => acc * curr, 10));

