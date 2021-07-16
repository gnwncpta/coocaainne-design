import './artworks.css';

const logo = document.querySelector('header img');
const techStack = document.querySelector('footer .left a.tech');
const designTools = document.querySelector('footer .left a.design');

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