/*

    Problem Statement
    Implement key taps such that on pressing 1 you scroll to section 1, 
    pressing 2 you scroll to section 2 and pressing 3 you scroll to section 3. 
    Also implement key tap b to go to bottom of the page and key tap t to go to top of the page

*/

const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');

document.addEventListener('keyup', function (event) {
    if (event.key === '1') {
        const sectionDistanceFromViewPort = section1.getBoundingClientRect().top;
        window.scrollTo({
            top: window.scrollY + sectionDistanceFromViewPort,
            behavior:'smooth'
        })
    }
    else if (event.key === '2') {
        const sectionDistanceFromViewPort = section2.getBoundingClientRect().top;
          window.scrollTo({
            top: window.scrollY + sectionDistanceFromViewPort,
            behavior:'smooth'
        })
    }
    else if (event.key === '3') {
        const sectionDistanceFromViewPort = section3.getBoundingClientRect().top;
        window.scrollTo({
            top: window.scrollY + sectionDistanceFromViewPort,
            behavior:'smooth'
        })
    }
})