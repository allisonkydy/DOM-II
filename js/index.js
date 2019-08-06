// Your code goes here

// ------------Selectors------------
const mainNav = document.querySelector('.main-navigation');
const images = document.querySelectorAll('img');
const body = document.querySelector('body');
const text = document.querySelectorAll('p, h2, h4');
const paragraph = document.querySelectorAll('p');
const headings = document.querySelectorAll('h1, h2, h4');
const textContent = document.querySelectorAll('.text-content');

// ------------CSS Changes------------
mainNav.style.zIndex = 1;
images.forEach(img => img.style.width = '100%');
images.forEach(img => img.style.height = '100%');
images.forEach(img => img.style.transition = 'width 2s, height 2s');

// ------------Event Listeners------------

// Images shrink on click, grow when transition ends
images.forEach(img => img.addEventListener('click', e => {
    e.target.style.width = '50%';
    e.target.style.height = '50%';
}));
images.forEach(img => img.addEventListener('transitionend', e => {
    e.target.style.width = '100%';
    e.target.style.height = '100%';
}));

// Images fade in on mouseover, fade out on mouseleave
images.forEach(img => img.addEventListener('mouseover', e => {
    e.target.style.opacity = 0.5;
}));
images.forEach(img => img.addEventListener('mouseleave', e => {
    e.target.style.opacity = 1;
}));

// Navigation background changes color on double click
mainNav.addEventListener('dblclick', e => {
    e.target.style.background = '#FFEBCD';
});

// Navigation background changes color when page is scrolled
window.addEventListener('scroll', () => {
    mainNav.style.background = 'blueviolet';
});

// Body change background color on keydown, back on keyup
body.addEventListener('keydown', e => {
    e.target.style.background = 'darkslategray';
});
body.addEventListener('keyup', e => {
    e.target.style.background = 'white';
});

// Text changes on click
text.forEach(element => element.addEventListener('click', e => {
    e.target.style.color = 'red';
    e.target.style.background = 'peachpuff';
    e.stopPropagation();
}));

// Text container changes on click
textContent.forEach(element => element.addEventListener('click', e => {
    e.target.style.border = '2px solid aquamarine';
}))

// Paragraph size increases on mouseup
paragraph.forEach(element => element.addEventListener('mouseup', e => {
    e.target.style.fontSize = '3.6rem';
}))

// Headings change color when window is resized
window.addEventListener('resize', () => {
    headings.forEach(heading => heading.style.color = 'yellowgreen');
});