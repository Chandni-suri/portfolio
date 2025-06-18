// Mobile Menu Toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('bx-x');
});

// Close menu when clicking on a link
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
  });
});

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// Scroll reveal animations
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 1000,
  delay: 200,
  reset: true
});

sr.reveal('.home-content, .home-img', { origin: 'left' });
sr.reveal('.timeline-item:nth-child(odd)', { origin: 'left' });
sr.reveal('.timeline-item:nth-child(even)', { origin: 'right' });
sr.reveal('.projects-box, .contact-form, .contact-info', { interval: 200 });

// Text animation
const textAnimation = document.querySelector('.text-animation');
const professions = ['Frontend Developer', 'Web Designer', 'Programmer'];
let professionIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentProfession = professions[professionIndex];
  const currentChar = currentProfession.substring(0, charIndex);
  
  textAnimation.querySelector('span').textContent = currentChar;
  
  if (!isDeleting && charIndex < currentProfession.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      professionIndex = (professionIndex + 1) % professions.length;
    }
    setTimeout(typeEffect, 1000);
  }
}

// Start the typing effect
typeEffect();

// Scroll sections active link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= sectionTop - 300) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.reveal');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementPosition < windowHeight - 100) {
      element.classList.add('active');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);