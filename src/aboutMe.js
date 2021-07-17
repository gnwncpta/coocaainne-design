import './aboutMe.css';

const logo = document.querySelector('header img');
const p = document.querySelectorAll('.profession p');
const prefessionDesc = document.querySelector('.profession-about');
const followButton = document.querySelector('button.follow');
const emailButton = document.querySelector('button.email');
const username = document.querySelector('section.about .profile .profile-cta .username');
const hamburger = document.querySelector('header .hamburger');
const menuOverlay = document.querySelector('header .hamburger .menu-overlay');

const UI_UX = `Before i jump into code. First i need to design this website first to measure the size of everything.
               <br>
               <br>
               So i know when the design on screen size 768 the design will look like this. And so on`;

const FRONT_END = `After i design the website then i slicing into Front End to realize the design into a website.
                   <br>
                   <br>
                   I use HTML, CSS, JavaScript and Webpack Module Bundler to make better development.
                   I build this site from scratch ofc, the process is fun to realize my design into a website`;


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
            prefessionDesc.innerHTML = `<p>
                                            Hi! my name is Muhammad Gunawan Cipta Negara
                                            I’ve been doing graphic design since 2 years ago.
                                            <br>
                                            <br>
                                            if you don’t know my instagram, you can click that follow button
                                            i made cool stuff there
                                        </p>`;
        
        // Jika yang di klik berisi class uix, maka
        } else if(e.target.classList.contains('uix')){
            prefessionDesc.innerHTML = UI_UX;

        // Jika yang di klik berisi class fe, maka
        } else if(e.target.classList.contains('fe')){
            prefessionDesc.innerHTML = FRONT_END;
        }
    })
})

logo.addEventListener('click', () => {
    window.location.href = './index.html';
});

function aboutMe() {
    console.log('About Me Page');
}

export default aboutMe;