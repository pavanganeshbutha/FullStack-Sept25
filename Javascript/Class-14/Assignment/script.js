const fsp = require('fs/promises');
const path = require('path');

const F1 = path.join(__dirname, 'abc.txt');
const F2 = path.join(__dirname, 'def.txt');

console.log(F1);
console.log(F2);

const ansArray = [];

function readFileByPromise(filePath) {
    return fsp.readFile(filePath, { encoding: 'utf-8' });
}

function twoSeries(file1, file2, ansArray) {
    readFileByPromise(file1)
        .then((data1) => {
            ansArray.push(data1);
            return readFileByPromise(file2);
        })
        .then((data2) => {
            ansArray.push(data2);
            ansArray.push('All files have been read');
            console.log(ansArray);
        });
        
}

twoSeries(F1, F2, ansArray);
