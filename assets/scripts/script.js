/*=========== numeros subindo ==========*/

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stat-card__num");

  counters.forEach(counter => {
    const target = +counter.textContent;
    counter.textContent = "0";

    const duration = 4000;
    const steps = 240;
    const increment = target / steps;
    let current = 0;
    let count = 0;

    const updateCounter = () => {
      current += increment;
      count++;
      if (count < steps) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };

    requestAnimationFrame(updateCounter);
  });
});

/*==================== MENU MOBILE ====================*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');
const navButton = document.querySelector('.nav__menu .nav__button');

// Abrir menu
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
    document.body.style.overflow = 'hidden'; // Previne scroll do body
  });
}

// Fechar menu
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
    document.body.style.overflow = ''; // Restaura scroll
  });
}

// Fechar menu ao clicar nos links
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
    document.body.style.overflow = '';
  });
});

// Fechar menu ao clicar no botão "Agendar Reunião"
if (navButton) {
  navButton.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
    document.body.style.overflow = '';
  });
}

// Fechar menu ao clicar fora dele
document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
    navMenu.classList.remove('show-menu');
    document.body.style.overflow = '';
  }
});

// Prevenir propagação de cliques dentro do menu
navMenu.addEventListener('click', (e) => {
  e.stopPropagation();
});

/*==================== SCROLL ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute('id');
    const link = document.querySelector(`.nav__link[href*="${sectionId}"]`);

    if (link) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
}

window.addEventListener('scroll', scrollActive);

/*==================== SCROLL UP ====================*/
const scrollUp = document.getElementById('scroll-up');

function showScrollUp() {
  if (window.scrollY >= 350) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', showScrollUp);

/*==================== HEADER BLUR ====================*/
const header = document.getElementById('header');

function blurHeader() {
  if (window.scrollY >= 50) {
    header.classList.add('blur-header');
  } else {
    header.classList.remove('blur-header');
  }
}

window.addEventListener('scroll', blurHeader);

/*==================== SCROLL REVEAL ANIMATION ====================*/
if (typeof ScrollReveal !== 'undefined') {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
    reset: false
  });

  sr.reveal(`.home__data, .section__title, .section__subtitle`);
  sr.reveal(`.home__messages`, { origin: 'right', delay: 600 });
  sr.reveal(`.stat-card`, { interval: 100 });
  sr.reveal(`.solution__card`, { interval: 100 });
  sr.reveal(`.workflow__node`, { interval: 200 });
  sr.reveal(`.cases__item, .insight__card`, { interval: 100 });
}