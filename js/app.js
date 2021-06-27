// close loader when page has loaded
// const loadingScreen = document.querySelector('.loading-screen');

// window.addEventListener('load',function() {
//     loadingScreen.style.transform = `translateY(-10000px)`;
//     loadingScreen.style.opacity = 0;
// });

// hamburger menu button 
const toggleBtn = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const overlay = document.querySelector('.overlay');

toggleBtn.addEventListener('click',function() {
    navbar.classList.toggle('clicked');
    overlay.classList.toggle('clicked');
});

// close navbar when a navlink is clicked
const navlinks = document.querySelectorAll('.navlink');

navlinks.forEach(function(link) {
    link.addEventListener('click',function() {
        navbar.classList.remove('clicked');
    });
});

// navigate through feedbacks by customers
const feedbacks = document.querySelectorAll('.feedback');
const nextFeedback = document.querySelector('.fa-chevron-circle-right');
const prevFeedback = document.querySelector('.fa-chevron-circle-left');

let counter = 0;

nextFeedback.addEventListener('click',function() {
    counter++;
    carousel();
});

prevFeedback.addEventListener('click',function() {
    counter--;
    carousel();
});

function carousel() {
    if (counter < 0) {
        counter = feedbacks.length - 1;
    } else if (counter > feedbacks.length - 1) {
        counter = 0;
    };

    feedbacks.forEach(function(feedback) {
        feedback.style.transform = `translateX(-${counter * 100}%)`;
    });
}