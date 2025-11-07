

// console.log('START'); 

// // function delay(fn, n) {
// //     const curr = new Date().getTime();
// //     while (new Date().getTime() <= curr + n*1000) { }
// //     fn();
// // }


// function fun() {
//     console.log('inside fun');
// }

// setTimeout(fun, 5000);

// // delay(fun, 5);

// console.log('END'); 


// -------------------------------

// console ---

// START 


// ---------------



// console.log('START');

// setTimeout(() => {
//     console.log('Inside Timeout')
// }, 1000);

// let num = 100;

// while (num < 200) {
//     num = num - 10;
//     console.log(num);
// }

// console.log('END');


// The above situation is known as startvation of callback queue.

// -------------------

console.log('START');

setTimeout(() => {
    console.log('Inside SetTimeout')    
}, 0);


console.log('END');