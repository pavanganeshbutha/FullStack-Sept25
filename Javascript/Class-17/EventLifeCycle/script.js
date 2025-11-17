const grandParent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

grandParent.addEventListener('click', function (event) {
    console.log('grandparent');
    grandParent.style.backgroundColor = 'orange'
}, false);

parent.addEventListener('click', function (event) {
    parent.style.backgroundColor = 'green'
    console.log('parent');
}, false);

child.addEventListener('click', function (event) {
    event.stopPropagation();
    child.style.backgroundColor = 'purple'
    console.log('child');
}, false);