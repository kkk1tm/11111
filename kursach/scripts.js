const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav-list');

burger.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
});