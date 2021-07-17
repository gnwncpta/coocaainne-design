import './aboutMe.css';
import GraphicDesign from './words/GraphicDesign';
import UIUX from './words/UIUX';
import FrontEnd from './words/FrontEnd';

const logo = document.querySelector('header img');
const p = document.querySelectorAll('.profession p');
const prefessionDesc = document.querySelector('.profession-about');
const followButton = document.querySelector('button.follow');
const emailButton = document.querySelector('button.email');
const username = document.querySelector('section.about .profile .profile-cta .username');
const hamburger = document.querySelector('header .hamburger');
const menuOverlay = document.querySelector('header .hamburger .menu-overlay');

hamburger.addEventListener('click', () => {
    menuOverlay.classList.toggle('show');
})

username.addEventListener('click', () => {
    window.location.href = 'https://instagram.com/coocaainne/';
})

followButton.addEventListener('click', () => {
    window.location.href = 'https://www.instagram.com/accounts/login/?next=%2Fcoocaainne%2F&source=follow';
})

emailButton.addEventListener('click', () => {
    window.location.href = 'mailto:gnwncpta@gmail.com';
})

p.forEach(field => {
    field.addEventListener('click', (e) => {

        // Jika ada yang active maka nonaktifkan
        p.forEach(el => {
            if(el.classList.contains('active')){
                el.classList.toggle('active');
            }
        });

        // buat aktif
        e.target.classList.toggle('active');
        
        // Jika yang di klik berisi class gd, maka
        if(e.target.classList.contains('gd')){
            prefessionDesc.innerHTML = GraphicDesign;
        
        // Jika yang di klik berisi class uix, maka
        } else if(e.target.classList.contains('uix')){
            prefessionDesc.innerHTML = UIUX;

        // Jika yang di klik berisi class fe, maka
        } else if(e.target.classList.contains('fe')){
            prefessionDesc.innerHTML = FrontEnd;
        }

    });
});

logo.addEventListener('click', () => {
    window.location.href = './index.html';
});

function aboutMe() {
    console.log('About Me Page');
}

export default aboutMe;