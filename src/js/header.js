const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
const menuCloseBtn = document.querySelector('.js-close-menu');

const menuClick = document.querySelector('.menu-click');
const headerMenuClick = document.querySelector('.header-menu-click');
const navLinks = document.querySelectorAll('.mobile-nav-link');

const header = document.querySelector('.header');

function openMobileMenu() {
  mobileMenu.classList.add('is-open');
}

function closeMobileMenu() {
  mobileMenu.classList.remove('is-open');
}

function closeMenu() {
  menuClick.classList.remove('open');
}

openMenuBtn.addEventListener('click', openMobileMenu);
menuCloseBtn.addEventListener('click', closeMobileMenu);

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    const targetSection = event.target.getAttribute('href');
    document
      .querySelector(targetSection)
      .scrollIntoView({ behavior: 'smooth' });
    closeMobileMenu();
  });
});

headerMenuClick.addEventListener('click', () => {
  menuClick.classList.toggle('open');
});

document.addEventListener('click', event => {
  if (
    !menuClick.contains(event.target) &&
    !headerMenuClick.contains(event.target)
  ) {
    closeMenu();
  }
});

function updateHeader() {
  if (window.scrollY > 50) {
    header.classList.add('fixed');
    localStorage.setItem('headerState', 'fixed');
  } else {
    header.classList.remove('fixed');
    localStorage.setItem('headerState', 'default');
  }
}

window.addEventListener('load', () => {
  const savedState = localStorage.getItem('headerState');
  if (savedState === 'fixed') {
    header.classList.add('fixed');
    window.scrollTo(0, window.scrollY);
  } else {
    header.classList.remove('fixed');
  }
});

window.addEventListener('scroll', updateHeader);
