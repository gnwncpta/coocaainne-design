import './home.css';

const logo = document.querySelector('header img');

logo.addEventListener('click', () => {
    window.location.href = 'index.html';
});

function home(){
    console.log('Home');
}

export default home;