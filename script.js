// Scroll suave para as seções
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Animação ao rolar (fadeInUp/fadeIn/scaleIn)
function animateOnScroll() {
    const animated = document.querySelectorAll('.section-animate, .card-animate, .produto-card');
    const windowBottom = window.innerHeight + window.scrollY;
    animated.forEach(el => {
        const rect = el.getBoundingClientRect();
        const elTop = rect.top + window.scrollY;
        if (windowBottom > elTop + 60) {
            el.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Garantir animação ao trocar de categoria
const categoriaBtns = document.querySelectorAll('.categoria-btn');
const categorias = document.querySelectorAll('.produtos-categoria');
categoriaBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        categoriaBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const cat = this.getAttribute('data-categoria');
        categorias.forEach(c => {
            if (c.id === cat) {
                c.style.display = '';
                // Animação dos cards ao aparecer
                setTimeout(() => {
                    c.querySelectorAll('.produto-card').forEach(card => {
                        card.classList.remove('visible');
                        setTimeout(() => card.classList.add('visible'), 50);
                    });
                }, 10);
            } else {
                c.style.display = 'none';
            }
        });
    });
});

// Mensagem de sucesso no formulário de contato
const form = document.querySelector('.contato-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
        form.reset();
    });
} 