/*

    Create a web application feature where clicking a button causes it to be 
    removed from the page, and simultaneously, two new buttons are 
    created and added to the page in its place.

*/

const doubleButton = document.querySelector('.double');
const div = document.querySelector('div');

function createButton(buttonText) {
    const btn = document.createElement('button');
    btn.innerText = buttonText;
    return btn;
}

doubleButton.addEventListener('click', function () {
    const btn1 = createButton('First Button');
    const btn2 = createButton('Second Button');

    div.append(btn1, btn2);

    doubleButton.remove();
})