const input = document.querySelector('input');

let count = 1;

function fetchApi() {
    console.log(`Fetching, count: ${count++}`);
}
// first timer , id=1 - gone
// second timer, id=2 - gone
// third timer, id=3

function debounce(delay) {
    let id = null;
    return function () {
        clearTimeout(id);
        id = setTimeout(function () {
            fetchApi();
        }, delay);
    }
}

const optimisedFetch = debounce(500);
// console.log(optimisesFetch);

// 501 
// prev = 501

// curr = 1002

// prev = 1002
// curr = 1503
function throttle() {
    let prev = new Date().getTime();
    return function () {
        const curr = new Date().getTime();
        if (curr - prev > 500) {
            fetchApi();
            prev = curr;
        }
    }
}

const throttleOptimisedFetch = throttle();

input.addEventListener('keyup', function () {
    const query = input.value;
    throttleOptimisedFetch(query);
});