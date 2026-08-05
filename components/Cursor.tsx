'use client'

import { useEffect, useRef } from 'react'

export default function Cursor(){
    const dotRef = useRef<HTMLDivElement>(null) /*Creo mi div */
    const ringRef = useRef<HTMLDivElement>(null)

    const mouse = useRef({x : 0, y :0}) //cursor
    const ring = useRef({x : 0, y :0}) //el anillo que lo sigue
    const rafID = useRef<number>(0) //el ID de requestAnimationFrame para cancelar la animación

    useEffect (() => {
        // posiciones
        const dot = dotRef.current!
        const rng = ringRef.current!

        // evento para el movimiento del mouse, especifico para el punto
        const onMove = (me: MouseEvent) => {
            
            // guardo la posisción del mouse
            mouse.current.x = me.clientX
            mouse.current.y = me.clientY

            // le digo donde ponerse al punto respecto al mouse
            dot.style.left = me.clientX + 'px'
            dot.style.top = me.clientY + 'px'
        }

        const animateRing = () => {
            ring.current.x += (mouse.current.x - ring.current.x) * 0.10
            ring.current.y += (mouse.current.y - ring.current.y) * 0.10
            // calcula la distancia y lo mueve 10% de esa distancia

            rng.style.left = ring.current.x + 'px'
            rng.style.top = ring.current.y + 'px' 
            //actualiza la posición del aniñño

            rafID.current = requestAnimationFrame(animateRing) //llama la animación cada frame
        }

        const onOver = (me : MouseEvent) => {
            const target = me.target as Element
            if(target.closest('a, button, .portfolioCard, .pubItem, .teachingCard')){
                rng.classList.add('hovered')
            }
        }

        const onOut= (me : MouseEvent) => {
            const target = me.target as Element
            if(target.closest('a, button, .portfolioCard, .pubItem, .teachingCard')){
                rng.classList.remove('hovered')
            }
        }

        // conectamos las funciones que hicimos a eventos reales
        document.addEventListener('mousemove', onMove)
        document.addEventListener('mouseover', onOver)
        document.addEventListener('mouseout', onOut)
        rafID.current = requestAnimationFrame(animateRing)

        return () =>{
            document.removeEventListener('mousemove', onMove)
            document.removeEventListener('mouseover', onOver)
            document.removeEventListener('mouseout', onOut)
            cancelAnimationFrame(rafID.current)
        }

    }, []) // ese array le dice que lo ejecuta una vez cuando se monta
    // cuando useEffect devuelve una función react lo ejecuta cuando se desmonta

    return (
        <>
            <div ref={dotRef} className='cursorDot'/>
            <div ref={ringRef} className='cursorRing'/>
        </>
    )

}