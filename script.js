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

// Botão voltar ao topo
const btnTopo = document.getElementById('btn-topo');
window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        btnTopo.classList.add('visible');
    } else {
        btnTopo.classList.remove('visible');
    }
});
if (btnTopo) {
    btnTopo.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Carrossel de imagens dos produtos
const carrossel = document.querySelector('.carrossel-imagens');
const btnEsq = document.querySelector('.carrossel-btn-esq');
const btnDir = document.querySelector('.carrossel-btn-dir');

if (carrossel && btnEsq && btnDir) {
    btnEsq.addEventListener('click', () => {
        carrossel.scrollBy({ left: -300, behavior: 'smooth' });
    });
    btnDir.addEventListener('click', () => {
        carrossel.scrollBy({ left: 300, behavior: 'smooth' });
    });
}

// Menu mobile responsivo
const menuBtn = document.querySelector('nav .menu-mobile');
const navUl = document.querySelector('nav ul');
if (menuBtn && navUl) {
    menuBtn.addEventListener('click', function() {
        navUl.classList.toggle('open');
    });
    // Fechar menu ao clicar em um link (mobile)
    navUl.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 600) {
                navUl.classList.remove('open');
            }
        });
    });
}

document.querySelectorAll('.solicitar-btn').forEach((button) => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const produtoCard = button.closest('.produto-card');
        const nomeProduto = produtoCard.querySelector('h3').innerText;
        const descricaoProduto = produtoCard.querySelector('p').innerText;

        const message = `Olá! Tenho interesse no produto *${nomeProduto}* (*${descricaoProduto}*). Quais as formas de pagamento?`;
        const phoneNumber = '5533998632041';
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    });
}); 