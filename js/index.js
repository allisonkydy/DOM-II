// Your code goes here

// ------------Selectors------------
const mainNav = document.querySelector('.main-navigation');
const images = document.querySelectorAll('img');
const body = document.querySelector('body');
const text = document.querySelectorAll('p, h2, h4');
const paragraph = document.querySelectorAll('p');

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
});

// Body change background color on keydown, back on keyup
body.addEventListener('keydown', e => {
    e.target.style.background = 'darkslategray';
});
body.addEventListener('keyup', e => {
    e.target.style.background = 'white';
});

// Text color changes to red on click
text.forEach(element => element.addEventListener('click', e => {
    e.target.style.color = 'red';
}));

// Paragraph size increases on mouseup
paragraph.forEach(element => element.addEventListener('mouseup', e => {
    e.target.style.fontSize = '3.6rem';
}))