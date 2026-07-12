'use client' // porque son nuestros componentes

import {useState, useEffect} from 'react'
import Link from 'next/link' // componente especial de Next
import { useParams, usePathname } from 'next/navigation' // hooks para navegación

const links = [
    {label : 'Home', href : '/'},
    {label : 'Portfolio', href : '/portfolio'},
    {label : 'Presentaciones', href : '/presentaciones'},
    {label : 'Publicaciones', href : '/publicaciones'},
    {label : 'Enseñanza', href : '/ensenanza'},
    {label : 'CV', href : '/cv'}
] // constante de datos, arreglo con los objetos 

export default function Navbar(){
    /* Desestructuración de arreglos. useState() devuelve dos cosas : 
        - valor actual, nosotros para saber si se muestra o no el navbar
        - función, como para cuando quiera hacer click cambie el falor
        [a,function] */
    const[menuOpen, setSttMenu ] = useState(false) 
    // del arreglo que manda, lo primero en visibleMenu y lo segundo en chngSttMenu
    const pathName = usePathname() //usamos el hook para la URL actual 

    // para móviles, si lo tiene abierto y navego entre la pagina, cierra el menú
    useEffect(()=>{
        setSttMenu(false)
    }, [pathName])

    // le digo que observe pathName y si cambia le mando la lambda que hace el estado del menu a falso

    return (
        <nav className='navbar'>
            <Link className='navLogo' href='/'>
                Isaac Urrutia (Urri)
            </Link>
            {/* Template literal, para construir clase dinamica, tendrá navLinks siempre, pero verá si esl menu es visible, si sí añade esa clase, si no, nada */}
            <ul className={`navLinks ${menuOpen ? 'visibleMenu' : ''}`}> 
                {
                    // Hago un mapeo en cada elemento de los links
                    links.map( (l) => (
                        <li key = {l.href}> {/* una key única por cada elemento y esa es su referencia*/}
                            <Link href={l.href} className={pathName === l.href ? 'active' : ''} onClick={() => setSttMenu(false)} > {/* Hago un Link donde la referencia es la referencia de cada link, su clase será active o nada dependiendo de si la URL actual es el links que está imprimiendo, al darle click el menú se cierra instant antes de cargar */}

                                {l.label} {/* Al nombre de cada Link le pongo la etiqueta (nombre) de cada link */}
                            </Link>
                        </li>
                    )
                    )
                }
            </ul>

            <button className='navMenuBtn' onClick={() => setSttMenu((s) => !s)} aria-label='Abrir menú'> {/* Clase navMenuBtn, el hacer click cambio el estado del menú, si está abierto la equis, si cerrado la pila esa  */}
                {menuOpen ? '✕' : '☰'}
            </button>
        </nav>
    )

}