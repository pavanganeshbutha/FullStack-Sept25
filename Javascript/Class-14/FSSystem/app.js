const fs = require('fs');

// console.log('START');

// fs.readFile('abc.txt', { encoding: 'utf-8' }, (err, data1) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data1);
//     fs.readFile('def.txt', { encoding: 'utf-8' }, (err, data2) => {
//         if (err) {
//             throw err;
//         }
//         console.log(data2);
//         fs.readFile('xyz.txt', { encoding: 'utf-8' }, (err, data3) => {
//             if (err) {
//                 throw err;
//             }
//             console.log(data3);
//         })
//     })
// });

// console.log('END');



const fsp = fs.promises;


// Serial/series way of reading the file

// console.time('timer1');

// fsp.readFile('abc.txt', { encoding: 'utf-8' })
//     .then((data1) => {
//         console.log(data1);
//         return fsp.readFile('def.txt', { encoding: 'utf-8' });
//     })
//     .then((data2) => {
//         console.log(data2);
//         return fsp.readFile('xyz.txt', { encoding: 'utf-8' });
//     })
//     .then((data3) => {
//         console.log(data3);
//         return fsp.readFile('ghi.txt', { encoding: 'utf-8' });
//     })
//     .then((data4) => {
//         console.log(data4);
//         console.timeEnd('timer1');
//     })
//     .catch((err) => {
//         console.log('Inside reject');
//         console.log(err.message);
//     });

    


// concurrent way of reading a file

console.time('timer2');

const p1 = fsp.readFile('abc.txt', { encoding: 'utf-8' });
p1.then((data) => console.log(data));

const p2 = fsp.readFile('def.txt', { encoding: 'utf-8' });
p2.then((data) => console.log(data));

const p3 = fsp.readFile('ghi.txt', { encoding: 'utf-8' });
p3.then((data) => console.log(data));

const p4 = fsp.readFile('xyz.txt', { encoding: 'utf-8' });
p4.then((data) => console.log(data));


console.timeEnd('timer2');