const divs = document.querySelectorAll('section div');
const section = document.querySelector('section');

// for (let div of divs) {
//     div.addEventListener('click', function () {
//         console.log(div.innerText);
//     })
// }

// Event Delegation
section.addEventListener('click', function (event) {
    if (event.target.nodeName !== 'DIV') {
        return;
    }
    // console.dir(event.target);
    console.log(event.target.innerText);
});