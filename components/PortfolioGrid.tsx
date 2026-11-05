'use client'

import { useState } from 'react'
import {projects, filterLabels } from '@/data/projects'
import PortfolioCard from './PortfolioCard'


const allCategories = ['todo', ...Array.from(new Set (projects.map((p) => p.category)))]

interface Props{
    // si falsoo es para los 4 de home
    showAll?: boolean
    // si falso oculta los botones de filtro para home
    showFilters?: boolean
}

export default function PortfolioGrid({ showAll = true, showFilters = true}: Props){
    const [active, setActive] = useState('todo')

    const visible = projects.filter((p)=> 
        active === 'todo' ? true : p.category === active
    ).slice(0, showAll ? undefined : 4)

    // si filtro entonces 6 para todos
    // sin filtro respeto la carta
    const getGridColumn = () =>{
       return active !== 'todo' ? 'span 6' : undefined
    }

    return (
        <>
            {showFilters && (
                <div style={{ display: 'flex', gap:8, marginBottom:40, flexWrap:'wrap'}}>
                    {allCategories
                        .filter((cat) => filterLabels[cat])
                        .map((cat) => (
                          <button 
                            key={cat}
                            className={`btn ${active === cat ? 'btnPrimary' : 'btnGhost'}`}
                            onClick = {() => setActive(cat)}
                            >
                                {filterLabels[cat]}
                            </button>  
                        ))
                    }
                </div>
            )}
            <div className='portfolioGrid'>
                {visible.map((p)=> (
                    <PortfolioCard
                        key={p.id}
                        project={p}
                        gridColumn={getGridColumn()}
                    />
                ))}
            </div>
        </>
    )
}
