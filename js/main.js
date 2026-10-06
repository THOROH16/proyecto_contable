// ============ NAVBAR: cambia al hacer scroll ============
const nav = document.getElementById('mainNav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// ============ CERRAR MENÚ MÓVIL AL HACER CLIC ============
const navLinks = document.querySelectorAll('.nav-link');
const navCollapse = document.getElementById('navMenu');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navCollapse.classList.contains('show')) {
            const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
            if (bsCollapse) bsCollapse.hide();
        }
    });
});

// ============ SCROLL SUAVE ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ============ FORMULARIO (demo) ============
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! (esto es una demo, aún no envía nada)');
    form.reset();
});