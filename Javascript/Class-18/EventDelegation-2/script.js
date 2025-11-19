/*

    create a set of colored boxes, and clicking 
    on any box will change its background color 
    using event delegation.

    if any box is clicked then you have to assign a random background color.

*/

const section = document.querySelector('section');

//0-255
//count=256
//start range = 0
function getRandomColor() { // rgb(20, 200, 100)
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

section.addEventListener('click', function (event) {
    if (event.target && event.target.nodeName !== 'DIV') {
        return;
    }
    event.target.style.backgroundColor = getRandomColor();
})


