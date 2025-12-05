
const p1 = Promise.resolve(100);
const p2 = Promise.resolve(200);
const p3 = Promise.resolve(300);

const p4 = new Promise((resolve) => setTimeout(() => resolve(400), 400));
const p5 = new Promise((resolve, reject) => setTimeout(() => resolve(500), 200));
const p6 = new Promise((resolve) => setTimeout(() => resolve(600), 300));

/*
[p1, p2, p3]

result of returned promise = [100, 200, 300]

*/


Promise.myAll = function (iterable) {
    if (!Array.isArray(iterable)) {
        throw new TypeError('Invalid parameter passed');
    }

    return new Promise((resolve, reject) => {
        const results = [];
        let count = iterable.length;
        iterable.forEach((promise, idx) => {
            Promise.resolve(promise)
                .then((val) => {
                    results[idx] = val;
                    count--;
                    if (count === 0) {
                        resolve(results);
                    }
                })
                .catch((err) => {
                    reject(err);
                })
        })
    });
}


Promise.myRace = function (arr) {
    return new Promise((resolve, reject) => {
        arr.forEach((promise) => {
            Promise.resolve(promise)
                .then((val) => {
                    resolve(val);
                })
                .catch((err) => {
                    reject(err);
                });
        })
    })
}



// Promise.myAll([1, 2, 3, 4, p1, p2, p3])
//     .then((res) => console.log(res))
//     .catch((err) => console.log('myall : Inside catch - ' + err));


// Promise.all([1, 2, 3, 4, p1, p2, p3])
//     .then((res) => console.log(res))
//     .catch((err) => console.log('all: catch - ' + err));

Promise.race([p4, p5, p6])
 .then((res) => console.log(res))
    .catch((err) => console.log('race: catch - ' + err));
 
Promise.myRace([p4, p5, p6])
 .then((res) => console.log(res))
 .catch((err) => console.log('myRace: catch - ' + err));