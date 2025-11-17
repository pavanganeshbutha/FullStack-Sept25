// Create a counter component that displays a 
// number and has buttons to increment and 
// decrement the number. The user should 
// be able to click the buttons to 
// increase or decrease the displayed number.

const counterDisplay = document.getElementById('count-display');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');

incrementBtn.addEventListener('click', function () {
    const counterDisplayText = counterDisplay.innerText;
    const countval = parseInt(counterDisplayText.trim());
    counterDisplay.innerText = countval + 1;
});

decrementBtn.addEventListener('click', function () {
    const counterDisplayText = counterDisplay.innerText;
    const countval = parseInt(counterDisplayText.trim());
    counterDisplay.innerText = countval - 1;
})
