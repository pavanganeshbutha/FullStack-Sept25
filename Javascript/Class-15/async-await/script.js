

async function add(x, y) {
    if (x + y === 7) {
        throw new Error('7 is not a luck number');
    }
    return x + y;
}

// add(6, 7)
//     .then((val) => {
//         console.log(val);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

function addV2(x, y) {
    return new Promise((resolve, reject) => {
        if (x + y === 7) {
            reject(new Error('7 is not a luck number'));
        }
        resolve(x + y);
    });
}

// addV2(1, 7)
//     .then((val) => {
//         console.log(val);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// 1. When function execution is complete i.e there is no line to execute.
// 2. When return keyword is encountered.
// 3. When Error is thrown.

async function print() { // this function also return something implicitly i.e undefined
    console.log('Hello world');
} 

async function main() {
    console.log('Starting to execute the function');

    const promise = add(4, 5);

    const val =  await promise;
    
    console.log("value of the promise", val);
    
    console.log('Function executed successfully');
}

console.log('START');

main();

console.log('END');

console.log('After End')
console.log('After End')
console.log('After End')
console.log('After End')
console.log('After End')
console.log('After End')
console.log('After End')
console.log('After End')

