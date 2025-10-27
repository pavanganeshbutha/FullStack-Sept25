/*

    Problem-1
    Problem Statement

    Develop a dynamic filter functionality for a webpage that lists movies 
    by their categories, such as Action, Romance, and Comedy. 
    When a user selects a category from a dropdown menu, 
    the page should update to display only the movies that belong to the selected 
    category. If "None" is selected, all movies should be shown. 
    This feature should enhance the user experience by allowing 
    them to easily find movies of their interest without scrolling through all available options.
*/

const select = document.querySelector('select');
const divs = document.querySelectorAll('.movies')

function filterAndDisplay(category) {
    if (category === 'none') {
        for (let div of divs) {
            div.style.display = 'block';
        }
    } else {
        for (let div of divs) {
            const currCategory = div.children[1].getAttribute('data-category');
            if (currCategory === category) {
                div.style.display = 'block'
            } else {
                div.style.display = 'none'
            }
        }
    }
}

select.addEventListener('change', function () {
    const filterVal = select.value;
    if (!filterVal) {
        return;
    }
    filterAndDisplay(filterVal);
})