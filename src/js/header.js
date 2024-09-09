const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
const menuCloseBtn = document.querySelector('.js-close-menu');


openMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});


menuCloseBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});


const navLinks = document.querySelectorAll('.mobile-nav-link');

function closeMenu() {
  mobileMenu.classList.remove('is-open');
}

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    const targetSection = event.target.getAttribute('href');
    document.querySelector(targetSection).scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  });
});

document.querySelector('.header-menu-click').addEventListener('click', function () {
    const menu = document.querySelector('.menu-click');
    menu.classList.toggle('open'); 
});