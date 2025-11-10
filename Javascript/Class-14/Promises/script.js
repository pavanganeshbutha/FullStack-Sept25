


// creating a promise

// const promise = new Promise((resolve, reject) => {
//     const num = Math.floor(Math.random() * 10 + 1) // 1-10
//     if (num < 5) {
//         resolve(num);
//     } else {
//         reject(new Error(`Num is greater than/equal to 5, num: ${num}`));
//     }
// });


const p = fetch('https://fakestoreapi.com/products');

p.then((res) => {
    console.log(res);
});

// consumption phase of the promise

// promise
//     .then((val) => {
//         console.log('Inside resolve ', val);
//     })
//     .catch((err) => {
//         console.log(err);
//     })




