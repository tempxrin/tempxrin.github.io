// ==================== NAVBAR ==================== 
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle menu mobile
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Fechar menu ao clicar fora
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navbar.contains(event.target);
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    
    // Scroll active link
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
});

// ==================== EFEITOS ==================== 
document.addEventListener('DOMContentLoaded', function() {
    const texts = [
        'Analista de Business Intelligence',
        'Cofundador da Wize Analytics'
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

// ==================== SCROLLAR AO TOPO ==================== 
document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// ==================== SMOOTH SCROLL ==================== 
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offset = 80;
                const targetPosition = target.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ==================== PAGINAS CURSOS ==================== 
document.addEventListener('DOMContentLoaded', function() {
    const courseCards = document.querySelectorAll('#coursesGrid .course-card');
    const coursePaginationBtns = document.querySelectorAll('#coursesPagination .pagination-btn');
    
    function showCoursePage(pageNumber) {
        courseCards.forEach(card => {
            if (card.getAttribute('data-page') === pageNumber.toString()) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
        
        coursePaginationBtns.forEach(btn => {
            if (btn.getAttribute('data-page') === pageNumber.toString()) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
    
    showCoursePage(1);
    
    coursePaginationBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const page = parseInt(this.getAttribute('data-page'));
            showCoursePage(page);
        });
    });
});

// ==================== PAGINAS PROJETOS ==================== 
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('#projectsGrid .project-card');
    const projectPaginationBtns = document.querySelectorAll('#projetos .pagination-btn');
    
    function showProjectPage(pageNumber) {
        projectCards.forEach(card => {
            const cardPage = card.getAttribute('data-page');
            
            if (cardPage === pageNumber.toString()) {
                // MOSTRAR card com transição suave
                card.style.display = 'block';
                card.style.opacity = '1';
                card.style.visibility = 'visible';
                
                // Pequeno delay para garantir o render
                setTimeout(() => {
                    card.style.opacity = '1';
                }, 10);
            } else {
                // ESCONDER card
                card.style.display = 'none';
            }
        });
        
        projectPaginationBtns.forEach(btn => {
            if (btn.getAttribute('data-page') === pageNumber.toString()) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
    
    // Inicializar mostrando todos os projetos da página 1
    showProjectPage(1);
    
    projectPaginationBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const page = parseInt(this.getAttribute('data-page'));
            showProjectPage(page);
        });
    });
});

// ==================== INTERSECTION OBSERVER FOR ANIMATIONS ==================== 
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);
    
    // Observe apenas timeline e contact cards, NÃO os project cards
    const cards = document.querySelectorAll('.timeline-item, .contact-card');
    cards.forEach(card => {
        card.style.opacity = '0.3';
        card.style.transition = 'opacity 0.3s ease';
        observer.observe(card);
    });
});

// ==================== LAZY LOADING IMAGES ==================== 
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                // Só aplicar efeito se a imagem ainda não carregou
                if (!img.complete) {
                    img.style.opacity = '0';
                    img.style.transition = 'opacity 0.5s ease';
                    
                    img.addEventListener('load', function() {
                        img.style.opacity = '1';
                    });
                    
                    img.addEventListener('error', function() {
                        img.style.opacity = '1';
                    });
                }
                
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        if (!img.complete) {
            imageObserver.observe(img);
        }
    });
});

// ==================== PERFORMANCE: Debounce Scroll Events ==================== 
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

window.addEventListener('scroll', debounce(function() {
    // Scroll events
}, 15));

// ==================== ACCESSIBILITY: Keyboard Navigation ==================== 
document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.getElementById('navMenu');
    const focusableElements = navMenu.querySelectorAll('a, button');
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    navMenu.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    firstFocusable.focus();
                    e.preventDefault();
                }
            }
        }
        
        if (e.key === 'Escape') {
            const navToggle = document.getElementById('navToggle');
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            navToggle.focus();
        }
    });
});

console.log('%c João Daniel Temporin - Portfólio ', 'background: #3b82f6; color: #fff; font-size: 16px; padding: 10px; border-radius: 4px;');
console.log('%c Desenvolvido com HTML, CSS e JavaScript ', 'color: #3b82f6; font-size: 12px;');