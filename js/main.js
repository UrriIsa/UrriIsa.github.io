
document.addEventListener('DOMContentLoaded', () => {

    /* ---- |~ CURSOR ---- */
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
})