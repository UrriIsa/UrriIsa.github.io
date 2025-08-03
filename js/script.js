document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const pages = document.querySelectorAll(".page");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Quitar clase 'active' de todos los enlaces
            navLinks.forEach(l => l.classList.remove("active"));
            // Agregar clase 'active' al enlace clickeado
            link.classList.add("active");

            // Ocultar todas las páginas
            pages.forEach(page => page.classList.remove("active"));

            // Scroll to top suave
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            }) ;

            // Mostrar la página correspondiente
            const targetPageId = link.getAttribute("data-page");
            const targetPage = document.getElementById(targetPageId);
            if (targetPage) {
                targetPage.classList.add("active");
            }
        });
    });


    const categoryBtns = document.querySelectorAll('.category-btn') ;
    const blogCards = document.querySelectorAll('.blog-card') ;
    const featuredArticle = document.querySelector('.featured-article') ;

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover active de todos los botones
            categoryBtns.forEach(b => b.classList.remove('active')) ;
            btn.classList.add('active') ;

            const category = btn.getAttribute('data-category') ;

            // Filtrar artículos
            blogCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category') ;
                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'block' ;
                    card.style.animation = 'fadeIn 0.5s ease forwards' ;
                } else {
                    card.style.display = 'none' ;
                }
            }) ;

            // Mostrar/ocultar artículo destacado
            if (featuredArticle) {
                const featuredCategory = featuredArticle.getAttribute('data-category') ;
                if (category === 'all' || featuredCategory === category) {
                    featuredArticle.style.display = 'block' ;
                    featuredArticle.style.animation = 'fadeIn 0.5s ease forwards' ;
                } else {
                    featuredArticle.style.display = 'none' ;
                }
            }
        }) ;
    }) ;
});


// Al hacer clic en “Leer más”
document.querySelectorAll('.btn-read-more').forEach(btn => {
  btn.addEventListener('click', e => {
    const card = e.currentTarget.closest('.project-card');

    // Ocultar todas las tarjetas menos la activa
    document.querySelectorAll('.project-card').forEach(c => {
      if (c !== card) c.classList.add('hidden');
    });

    // Expandir y mostrar descripción completa
    card.classList.add('expanded');
    card.querySelector('.project-full-description').classList.remove('hidden');

    // Opcional: desplazar suavemente hasta la tarjeta
    card.scrollIntoView({ behavior: 'smooth' });
  });
});




const toggleBtn   = document.getElementById('theme-toggle');
const picker      = document.getElementById('theme-picker');
const options     = document.querySelectorAll('.color-option');
const root        = document.documentElement;

// Al cargar, aplica el tema guardado o el sistema por defecto
const saved       = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
root.setAttribute('data-theme', saved || (prefersDark ? 'dark' : 'light'));

// Mostrar/ocultar paleta
toggleBtn.addEventListener('click', () => {
  picker.classList.toggle('open');
});

// Asignar tema al hacer clic en una opción
options.forEach(btn => {
  btn.addEventListener('click', () => {
    const theme = btn.getAttribute('data-theme');
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    picker.classList.remove('open');
  });
});

// Cerrar paleta al hacer clic fuera
document.addEventListener('click', e => {
  if (!picker.contains(e.target) && e.target !== toggleBtn) {
    picker.classList.remove('open');
  }
});

