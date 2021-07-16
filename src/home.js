import './home.css';

const logo = document.querySelector('header img');
const hamburger = document.querySelector('header .hamburger');
const menuOverlay = document.querySelector('header .hamburger .menu-overlay');

hamburger.addEventListener('click', () => {
    menuOverlay.classList.toggle('show');
});

logo.addEventListener('click', () => {
    window.location.href = 'index.html';
});

function home(){
    console.log('Home');
}

export default home;