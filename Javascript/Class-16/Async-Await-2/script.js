// async function add() {
//     return "Hello";
// }

// function addV1() {
//     return new Promise((resolve, reject) => {
//         resolve("Hello");
//     })
// }

// async function main() {
//     const val = await addV1();
//     console.log(val);
// }

// main();

function downloadFile(filePath, callback) {
    // 1. perform download process
    setTimeout(() => {
        callback('profile.jpg');
    }, 2000);
    // 2. call the callback
}

console.log('START');

downloadFile('http://abc.com/profile.jpg', function (fileName) {
    console.log('File downloaded successfully', fileName);
});

console.log('END');


// ------------------------------ downloading using promise--------

function downloadFile(filePath) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fileName = filePath.split('/').pop();
            resolve(fileName)
        }, 5000)
    })
}

// console.log('START');

// downloadFile('http://abc.com/profile.jpg')
//     .then((fileName) => {
//         console.log('file downloaded successfully', fileName);
//     });

// console.log('END');


async function main() {
    console.log('START');
    const fileName = await downloadFile('http://abc.com/profile.jpg');
    console.log(fileName)
    console.log('END');
}

main();