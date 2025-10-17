// Mouse Events
const divs = document.querySelectorAll('div');
const input = document.querySelector('input');
const form = document.querySelector('form');

for (let div of divs) {
    div.addEventListener('mouseenter', function () {
        // console.log(`mouse enter div: ${div.innerText}`);
        div.style.backgroundColor = 'lightgreen'
    })
    div.addEventListener('mouseleave', function () {
        // console.log(`mouse leave div: ${div.innerText}`);
        div.style.backgroundColor = 'aqua'
    })
}

// Keyboard Events
input.addEventListener('keyup', function (event) {
    if (event.key === "Enter") {
        console.log(input.value);
    }
});


// form submit event
form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.dir(form.elements[0].value);
    console.dir(form.elements[1].value);
});