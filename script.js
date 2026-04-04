// ── INIT — confirma que JS está rodando ──
document.documentElement.classList.add('js-ready');

<<<<<<< HEAD
// ── THEME ──
const html     = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
const iconMoon = document.getElementById('iconMoon');
const iconSun  = document.getElementById('iconSun');
=======
// ==================== EFEITOS ==================== 
document.addEventListener('DOMContentLoaded', function() {
    const texts = [
        'Analytics Engineer'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingText = document.getElementById('typingText');
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let speed = isDeleting ? deletingSpeed : typingSpeed;
        
        if (!isDeleting && charIndex === currentText.length) {
            speed = pauseTime;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
        
        setTimeout(type, speed);
    }
    
    if (typingText) {
        setTimeout(type, 1000);
    }
});
>>>>>>> a7a7a5cb9c7a35689872595c439611ae321bf642

function setTheme(t) {
  html.setAttribute('data-theme', t);
  localStorage.setItem('theme', t);
  if (t === 'light') {
    iconMoon.style.display = 'none';
    iconSun.style.display  = 'block';
  } else {
    iconMoon.style.display = 'block';
    iconSun.style.display  = 'none';
  }
}

const saved = localStorage.getItem('theme') || 'dark';
setTheme(saved);

themeBtn.addEventListener('click', () => {
  setTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

// ── BURGER / MOBILE MENU ──
const burger     = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

<<<<<<< HEAD
document.querySelectorAll('.mm-link').forEach(l => {
  l.addEventListener('click', () => {
    burger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// ── REVEAL ON SCROLL ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Hero reveals immediately on load
document.querySelectorAll('.hero .reveal').forEach((el, i) => {
  setTimeout(() => el.classList.add('visible'), 80 + i * 80);
});

// Safety fallback — revela tudo após 800ms caso observer não tenha disparado
setTimeout(() => {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => el.classList.add('visible'));
}, 800);

// ── SCROLL TO TOP ──
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── NAV SCROLL SPY ──
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
const spySections = Array.from(navAnchors)
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

function updateActiveNav() {
  let current = '';
  spySections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute('id');
  });
  navAnchors.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();
=======
console.log('%c João Daniel Temporin - Portfólio ', 'background: #3b82f6; color: #fff; font-size: 16px; padding: 10px; border-radius: 4px;');
console.log('%c Desenvolvido com HTML, CSS e JavaScript ', 'color: #3b82f6; font-size: 12px;');
>>>>>>> a7a7a5cb9c7a35689872595c439611ae321bf642
