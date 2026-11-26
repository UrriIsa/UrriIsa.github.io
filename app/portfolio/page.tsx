import PortfolioGrid from '@/components/PortfolioGrid';

export const metadata = {
    title : 'Portfolio - Isaac Urrutia'
}

export default function Portfolio(){
    return (
        <section className='section' style={{ paddingTop: 120}}>
            <div className='sectionLabel'> Trabajo</div>
            <h2 className='sectionTitle'>
                My <span className='outline'>Portfolio</span>
            </h2>
            <PortfolioGrid showAll showFilters />
        </section>
    )
}

/*
'use client'

import Link from 'next/link';

export default function Home() {
    return (
    <>
      {/* Mantenimiento }
        <section className="me">
            <div className="meTextCol">

                <h1 className="meName">
                    Page Under Maintenance
                </h1>

                <p className="meDesc">
                    Please return to the home page
                </p>

                <div className="meCTAs">
                    <Link className="btn btnGhost" href="/">
                        HOME PAGE
                    </Link>
                </div>

            </div>
        </section>
    </>
    )
}*/
