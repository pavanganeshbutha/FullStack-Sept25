const resultSection = document.querySelector('#result');


function displayProducts(data) {
    for (let product of data) {
        const image = document.createElement('img');
        image.setAttribute('src', product.image);

        image.classList.add('product');
        resultSection.append(image);
    }
}

async function fetchAllProducts() {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    displayProducts(data);
}

// console.log('START');

// fetchAllProducts();

// console.log('END');


// ------------------------------------- Series code and Exception handling

// async function fetchProductById(id) {
//     try {
//         if (id === 2) {
//             throw new Error('Something went wrong');
//         }
//         const res = await fetch(`https://fakestoreapi.com/products/${id}`);
//         const data = await res.json();
//         return data;
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// async function main() {
//     console.time('timer');
//     const res1 = await fetchProductById(1);
//     console.log(res1);
//     const res2 = await fetchProductById(2);
//     console.log(res2);
//     const res3 = await fetchProductById(3);
//     console.log(res3);
//     const res4 = await fetchProductById(4);
//     console.log(res4);
//     console.timeEnd('timer');
// }

// main();

// ---------------------------- Fetching products in parellel

async function fetchProductById(id) {
    // if (id === 2) {
    //     throw new Error('Something went wrong');
    // }
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    return data;
}

async function main() {
    const resPromise1 = fetchProductById(1);
    const resPromise2 = fetchProductById(2);
    const resPromise3 = fetchProductById(3);
    const resPromise4 = fetchProductById(4);

    const results = await Promise.all([resPromise1, resPromise2, resPromise3, resPromise4]);
    console.log(results);
}

main();