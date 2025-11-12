const fsp = require('fs/promises');
const path = require('path');

const F1 = path.join(__dirname, 'file1.txt');
const F2 = path.join(__dirname, 'file2.txt');

async function twoSeries() {
    const file1Content = await fsp.readFile(F1, { encoding: 'utf-8' });
    const file2Content = await fsp.readFile(F2, { encoding: 'utf-8' });
    return [file1Content, file2Content, 'All files have been read'];
}

async function main() {
    const res = await twoSeries();
    console.log(res);
}

main();