const button = document.querySelector('.menu-hamburger');
const menu = document.querySelector('.menu');

button.addEventListener('click', () => {
    menu.classList.toggle('open');
    button.classList.toggle('active');
});