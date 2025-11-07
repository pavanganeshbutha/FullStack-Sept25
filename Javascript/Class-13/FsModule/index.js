const fs = require('fs');

console.log('START');

// Callback hell
fs.readFile(`${__dirname}/file1.txt`, { encoding: 'utf-8' }, function (err, data) {
    console.log(data);
    fs.readFile(`${__dirname}/file2.txt`, { encoding: 'utf-8' }, function (err, data) {
        console.log(data);
        fs.readFile(`${__dirname}/file3.txt`, { encoding: 'utf-8' }, function (err, data) {
            console.log(data);
        });
    });
});

console.log('END');