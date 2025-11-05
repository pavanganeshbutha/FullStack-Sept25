const res = [1, 2, 3].map(num => {
  if (typeof num === 'number') return;
  return num * 2;
});

console.log(res);


function add() {
    return;
}

console.log(add());