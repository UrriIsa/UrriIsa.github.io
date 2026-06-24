
document.addEventListener('DOMContentLoaded', () => {

    /* -------------------- |~ CURSOR ------------------------- */
    const dot = document.querySelector('.cursorDot') ;
    const ring = document.querySelector('.cursorRing') ;

    let mouseX = 0 , mouseY = 0 , ringX = 0 , ringY = 0 ;

    // mousemove como su nombre lo indica
    document.addEventListener('mousemove', e => {
        mouseX = e.clientX ;
        mouseY = e.clientY ;
        dot.style.left = mouseX + 'px' ;
        dot.style.top = mouseY + 'px' ;
    }) ;

    ( function animateRing (){
        /* (mouse - posicion) * factor de rapidez
            Si estoy en 0,0, me muevo a 100,0
            entonces el ring (100 - 0 ) * 0.12 = 22 y se mueve 22
            Si se queda el mouse recalcula más cerca
            de esta manera se hace más suave el movimiento, por ello el factor
        */
        ringX += (mouseX - ringX) * 0.10 ; 
        ringY += (mouseY - ringY) * 0.10 ;
        ring.style.left = ringX + 'px' ;
        ring.style.top = ringY + 'px' ;
        requestAnimationFrame(animateRing) ; // lo vuelvo recursivo para que siempre se llame, se stackea, termina y vuelve a solicitar al navegador que cuando pueda lo haga
        
    }) () ; // el (); llama a la expresión q hicimos por primera vez para hacerla correr

    // a cada elemento le aplico
    document.querySelectorAll('a, button, .portfolioCard, .pubItem, .teachingCard').forEach(el => {
        el.addEventListener('mouseenter', () => ring.classList.add('hovered')) ; // si el mouse entra añado clase hovered
        el.addEventListener('mouseleave', () => ring.classList.remove('hovered')) ; // si el mouse sale quito clase hovered
    });


    /* ---------------------------|~ NAVEGACION -------------------- */
    const pages = document.querySelectorAll('.page') ;
    const navItems = document.querySelectorAll('.navLinks a[data-page]') ; // Seleccionamos de la clase navLinks los elementos a que tengan atributo data-page

    function showPage(pageId){
        pages.forEach(p=> {
            p.classList.remove('active') ; 
            p.style.opacity = 0 ;
        }) ;

        navItems.forEach(a=> a.classList.remove('active')) ;

        const target = document.getElementById('page' + pageId.charAt(0).toUpperCase() + pageId.slice(1)) ; 
        
        if(target){
            target.style.transition = 'opacity 0.4s ease' ;
            target.classList.add('active') ;
            //animacion
            setTimeout(() => { target.style.opacity = 1; }, 20 ) ;
            
        }

        const activeLink = document.querySelector(`.navLinks a[data-page="${pageId}"]`) ;
        if(activeLink){
            activeLink.classList.add('active') ;
        }

        window.scrollTo({ top:0 , behavior : 'smooth' }) ;

    }

    navItems.forEach(link=>{
        link.addEventListener( 'click', e => {
            e.preventDefault() ;
            const page = link.dataset.page ;
            showPage(page) ;
        });
    }) ;

    document.querySelectorAll('[data-goto]').forEach(btn =>{
        btn.addEventListener('click', e=> {
            e.preventDefault();
            showPage(btn.dataset.goto) ;
        });
    }) ;
    showPage('home') ;

    document.querySelectorAll('[data-filter]').forEach(btn => {
        btn.addEventListener('click',() =>{
            document.querySelectorAll('[data-filter]').forEach(b =>{
                b.classList.remove('btnPrimary') ;
                b.classList.add('btnGhost') ;
            }) ;

            btn.classList.remove('btnGhost') ;
            btn.classList.add('btnPrimary') ;

            const filter = btn.dataset.filter ;

            document.querySelectorAll('.portfolioCard').forEach(card =>{
                const match = filter === 'todo' || card.dataset.category === filter ; 
                card.style.display = match ? '' : 'none' ;
                card.style.grid
            }) ;

            // Si es filtro específico, iguala columnas a 6
            const visibles = document.querySelectorAll('.portfolioCard:not([style*="none"])') ;
            visibles.forEach(card => {
                if (filter === 'todo') {
                    card.style.gridColumn = '' ; // regresa al CSS original
                } else {
                    card.style.gridColumn = 'span 6' ;
                }
            }) ;

        }) ;
    }) ;


}) ;

/*añade marquee  */