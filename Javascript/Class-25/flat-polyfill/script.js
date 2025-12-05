

const nestedArray = [1, 2, [3], 4, [6,7,[8]]];

// output = [1,2,3,4,5,6,7,8,9, [10], 11, 12, 13]

// console.log(nestedArray.flat());

Array.prototype.myFlat = function () {
    const arr = this;

    const res = [];
    for (let el of arr) {
        if (Array.isArray(el)) {
            res.push(...el);
        } else {
            res.push(el);
        }
    }

    return res;
}


Array.prototype.myFlatV2 = function () {
    const arr = this;
    
    return arr.reduce((acc, curr) => {
        if (Array.isArray(curr)) {
            return acc.concat(curr);
        }
        return acc.concat(curr);
    }, []);
}


function myFlatV3(arr) {
    return arr.reduce((acc, curr) => {
        if (Array.isArray(curr)) {
            return acc.concat(myFlatV3(curr));
        }
        return acc.concat(curr);
    }, []);
}

console.log(myFlatV3(nestedArray));


Array.prototype.customeFlat = function (depth = 1) {
    if (!Array.isArray(this)) {
        throw new TypeError("Not an iterable");
    }
    if (depth < 0)
        throw new Error("Depth should not be negative");
    const flattenArr = [];
    const flatFn = (arr, curDepth) => {
        for (let i = 0; i < arr.length; i++) {
            const val = arr[i];
            if (Array.isArray(val) && curDepth > 0) {
                flatFn(val, curDepth - 1);
            } else {
                flattenArr.push(val);
            }
        }
    };
    flatFn(this, depth);
    return flattenArr;
};

// const a = [3, [32, 43, [23, [23], 435]], 4];
// const b = a.customeFlat(2);
// console.log(b);