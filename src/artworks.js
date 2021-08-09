import './artworks.css';

const logo = document.querySelector('header img');
const techStack = document.querySelector('footer .left a.tech');
const designTools = document.querySelector('footer .left a.design');
const hamburger = document.querySelector('header .hamburger');
const menuOverlay = document.querySelector('header .hamburger .menu-overlay');

hamburger.addEventListener('click', () => {
    menuOverlay.classList.toggle('show');
})

techStack.addEventListener('click', () => {
    console.log('This user ask Tech Stack');
})

logo.addEventListener('click', () => {
    window.location.href = './index.html';
})

function artworks(){
    console.log('Artworks')
}

module.exports = artworks