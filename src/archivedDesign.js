import './archivedDesign.css';

const logo = document.querySelector('header img');

logo.addEventListener('click', () => {
    window.location.href = './index.html';
});

function archivedDesign(){
    console.log('Archived Design');
}

module.exports = archivedDesign;