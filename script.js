const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show-menu');
});





// JavaScript for rotating top news banner
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
    const offset = -index * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}, 5000);






// Placeholder script for future functionality
document.addEventListener('DOMContentLoaded', () => {
    // Code for future enhancements, if any
});







// JavaScript for handling the email subscription form
document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
        alert(`Thank you for subscribing with ${email}`);
        document.getElementById('subscription-form').reset();
    } else {
        alert('Please enter a valid email address.');
    }
});
