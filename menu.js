// menu.js
// Menú desplegable para mobile

document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('nav');
    if (!nav) return;
    const navList = nav.querySelector('ul');
    if (!navList) return;

    // Crear botón hamburguesa
    const menuBtn = document.createElement('button');
    menuBtn.className = 'menu-toggle';
    menuBtn.setAttribute('aria-label', 'Abrir menú');
    menuBtn.innerHTML = `
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    `;
    nav.insertBefore(menuBtn, navList);

    // Evento para abrir/cerrar menú
    menuBtn.addEventListener('click', function () {
        navList.classList.toggle('menu-open');
        menuBtn.classList.toggle('open');
    });

    // Cerrar menú al hacer click en un enlace
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('menu-open');
            menuBtn.classList.remove('open');
        });
    });
});


const header = document.querySelector("header");

let lastScroll = 0;

window.addEventListener("scroll", () => {

    // solo mobile
    if (window.innerWidth > 900) {
        header.classList.remove("header-hide");
        return;
    }

    const currentScroll = window.pageYOffset;

    // arriba del todo
    if (currentScroll <= 0) {
        header.classList.remove("header-hide");
        return;
    }

    // si el menu hamburguesa está abierto NO ocultar
    const menuOpen = document.querySelector(".menu-open");

    if (menuOpen) {
        return;
    }

    // bajando
    if (currentScroll > lastScroll + 5) {
        header.classList.add("header-hide");
    }

    // subiendo
    else if (currentScroll < lastScroll - 5) {
        header.classList.remove("header-hide");
    }

    lastScroll = currentScroll;
});

