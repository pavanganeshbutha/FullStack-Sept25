// Design a star rating component that allows users to 
// rate something using stars. The component should display 
// a visual representation of the rating using filled 
// and empty stars. Users can click on the stars to select a rating.

const section = document.querySelector('section');
const divs = document.querySelectorAll('section div');

function updateRatingUI(selectedRating) {
    for (let star of divs) {
        const currentStarRating = parseInt(star.getAttribute('data-rating'));
        currentStarRating <= selectedRating ? star.classList.add('filled') : star.classList.remove('filled');

    }
}


section.addEventListener('click', function (event) {
    if (event.target.nodeName !== 'DIV') {
        return;
    }

    const ratingVal = parseInt(event.target.getAttribute('data-rating'));
    console.log(ratingVal);
    updateRatingUI(ratingVal);
});

for (let star of divs) {
    star.addEventListener('mouseenter', function (event) {
        const ratingVal = parseInt(event.target.getAttribute('data-rating'));
        updateRatingUI(ratingVal);
    });
    star.addEventListener('mouseleave', function (event) {
        for (let div of divs) {
            div.classList.remove('filled');
        }
    });
}