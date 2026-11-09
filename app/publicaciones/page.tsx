'use client'

import Link from 'next/link';

export default function Home() {
    return (
    <>
      {/* Mantenimiento */}
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
}
