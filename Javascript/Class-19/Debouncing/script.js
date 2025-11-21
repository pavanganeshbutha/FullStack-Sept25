const input = document.querySelector('input');

let count = 1;

function fetchApi(query) {
    console.log(`Fetching, count: ${count++}`);
}
// first timer , id=1 - gone
// second timer, id=2 - gone
// third timer, id=3

function debounce() {
    let id = null;
    return function () {
        clearTimeout(id);
        id = setTimeout(function () {
            fetchApi();
        }, 500);
    }
}

const optimisedFetch = debounce();
// console.log(optimisesFetch);

input.addEventListener('keyup', function () {
    const query = input.value;
    optimisedFetch(query);
});