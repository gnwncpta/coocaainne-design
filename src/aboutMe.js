import './aboutMe.css';

const logo = document.querySelector('header img');
const p = document.querySelectorAll('.profession p');
const prefessionDesc = document.querySelector('.profession-about');
const followButton = document.querySelector('button.follow');

followButton.addEventListener('click', () => {
    window.location.href = 'https://www.instagram.com/accounts/login/?next=%2Fcoocaainne%2F&source=follow';
})

p.forEach(field => {
    field.addEventListener('click', (e) => {
        e.target.classList.toggle('active');
        
        if(e.target.classList.contains('gd')){
            prefessionDesc.innerHTML = `<p>
                                            Hi! my name is Muhammad Gunawan Cipta Negara
                                            I’ve been doing graphic design since 2 years ago.
                                            <br>
                                            <br>
                                            if you don’t know my instagram, you can click that follow button
                                            i made cool stuff there
                                        </p>`;

        } else if(e.target.classList.contains('uix')){
            prefessionDesc.innerHTML = `<p>
                                            UIX
                                        </p>`;
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