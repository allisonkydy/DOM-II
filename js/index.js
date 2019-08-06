// Your code goes here

// ------------Selectors------------
const mainNav = document.querySelector('.main-navigation');
const images = document.querySelectorAll('img');

// ------------CSS Changes------------
mainNav.style.zIndex = 1;

// ------------Event Listeners------------

// Fade in images on mouseover
images.forEach(img => img.addEventListener('mouseover', e => {
    e.target.style.opacity = 0.5;
}));

// Fade out images on mouseleave
images.forEach(img => img.addEventListener('mouseleave', e => {
    e.target.style.opacity = 1;
}));

// Navigation change color on double click
mainNav.addEventListener('dblclick', e => {
    e.target.style.background = '#FFEBCD';
    console.log('im scrolling');
});