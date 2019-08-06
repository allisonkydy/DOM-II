// Your code goes here

// CSS Changes
document.querySelector('.main-navigation').style.zIndex = 1;

const images = document.querySelectorAll('img');

// Fade in images on mouseover
images.forEach(img => img.addEventListener('mouseover', e => {
    e.target.style.opacity = 0.5;
}));

// Fade out on mouseleave
images.forEach(img => img.addEventListener('mouseleave', e => {
    e.target.style.opacity = 1;
}));

