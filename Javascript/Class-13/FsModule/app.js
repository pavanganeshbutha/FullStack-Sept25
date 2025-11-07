const fs = require('fs');


console.log('START');

fs.readFile(`${__dirname}/abc.txt`, {encoding:'utf-8'} ,function (err, data) {
    if (err) {
        throw err;
    }
    console.log(data);
});

const data = fs.readFileSync(`${path}/abc.txt`);
console.log(data);

console.log('END');