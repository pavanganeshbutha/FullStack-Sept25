

async function main() {
    try {
        const promise1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('First promise');
            }, 500);
        });

        const promise2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error('some rejected reason'));
                // resolve('Second Promise');
            }, 200);
        });

        const promise3 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Third Promise');
            }, 600);
        });

        // ------------------------------ Promise.all()

        // const res = await Promise.all([promise1, promise2, promise3]);
        // console.log(res);


        // // ------------------------------ Promise.allSettled()
        // const res = await Promise.allSettled([promise1, promise2, promise3]);
        // console.log(res);


        // ------------------------------ Promise.race()
        // const res = await Promise.race([promise1, promise2, promise3]);
        // console.log(res);

        // ------------------------------ Promise.any()
        const res = await Promise.any([promise1, promise2, promise3]);
        console.log(res);
    }
    catch (err) {
        console.log(err);
    }
}

// main();




// -------------------------------Promise.resolve()-----------

async function fn() {

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(99999);
        }, 100);;
    })

    try {
        // const p1 = await Promise.resolve(promise);
        const p2 = await Promise.reject('Value of rejected promise');
        // console.log(p1);
        console.log(p2);
    }
    catch (err) {
        console.log(err);
    }
}

fn();
