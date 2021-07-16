import './artworks.css';

const logo = document.querySelector('header img');

logo.addEventListener('click', () => {
    window.location.href = './index.html';
})

function artworks(){
    console.log('Artworks')
}

module.exports = artworks