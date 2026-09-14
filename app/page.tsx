'use client'

// importar el use marquee y el grid de components y el hook del reveal
import Link from 'next/link';



export default function Home() {


  return (
    <>
      {/* ──────────────────────────────────────────────
          [ YO / HERO ]
      ────────────────────────────────────────────── */}
      <section className="me">
        <div className="meTextCol">
          <span className="meTag">Computer science · Biology · Art</span>

          <h1 className="meName">
            Isaac <br />
            <span className="outline">Urrut</span>
            <span className="accent">ia</span>
          </h1>

          <p className="meDesc">
            Computer science student and researcher, bridging the gap between academia
            and industry. Focused on bioinformatics and theoretical computing
          </p>

          <div className="meCTAs">
            <Link className="btn btnPrimary" href="/portfolio">
              See Portfolio
            </Link>
            <Link className="btn btnGhost" href="/cv">
              See CV
            </Link>
          </div>
        </div>

        <div className="meVisualCol">
          <div className="meBGShape" />

          <div className="mePhotoWrap">
            {/*
              Pon tu foto en /public/imgs/ y cambia el src.
              Para un render de Blender puedes usar una imagen .png o .webp.
            */}
            <img
              src="/imgs/foto.jpeg"
              alt="Urri"
              onError={(e) => {
                const img = e.currentTarget
                img.style.background = '#1e1e1e'
                img.src = ''
              }}
            />
            <div className="mePhotoBorder" />
          </div>

          <div className="meFloatTag meFloatTag1">
            <span className="dot" />
            Available to collaborate
          </div>

          <div className="meFloatTag meFloatTag2">
            <span className="dot" />
            Hii
          </div>
        </div>

        <div className="meScrollHint">Scroll</div>
      </section>

      {/* ──────────────────────────────────────────────
          [ MARQUEE ]
      ────────────────────────────────────────────── */}
      {/*<Marquee />*/}

      {/* ──────────────────────────────────────────────
          [ SOBRE MÍ ]
      ────────────────────────────────────────────── */}
      <section className="section">
        <div className="sectionLabel" style={{ color: '#c8b4ff', fontSize: '1rem' }}>
          About me
        </div>
        <h2 className="sectionTitle">
          Ciencia &amp; <span className="outline">Arte</span>
        </h2>

        <div className="aboutGrid">
          <div className="aboutText reveal">
            <p>
              I have focused on the intersection of computer science and biology. I enjoy applying the technical fundamentals of computing in
              interdisciplinary contexts, so I have been working to broaden
              my perspective.
            </p>
            <p>
              My social service internship at the Xyloteka of the Institute of Biology at
              UNAM led to a project that was presented at the 23rd Mexican Congress
              of Botany, held in Villahermosa, Tabasco. It is currently
              in the process of being published.
            </p>
            <p>Outside of academia, art is one of my passions.</p>
          </div>

          <div className="statsGrid reveal">
            <div className="statCard">
              <div className="statNumber c1">3.66</div>
              <div className="statLabel">GPA / 4.0</div>
            </div>
            <div className="statCard">
              <div className="statNumber c2">3</div>
              <div className="statLabel">Years of research</div>
            </div>
            <div className="statCard">
              <div className="statNumber c3">1</div>
              <div className="statLabel">Publications in Progress</div>
            </div>
            <div className="statCard">
              <div className="statNumber c4">2</div>
              <div className="statLabel">Interships / Research stay</div>
            </div>
          </div>
        </div>
      </section>

      <div className="sectionDivider" />

      {/* ──────────────────────────────────────────────
          [ PROYECTOS DESTACADOS ]
      ────────────────────────────────────────────── */}
      <section className="section">
        <div className="sectionLabel">Recent work </div>
        <h2 className="sectionTitle">
          Featured <span className="outline">Proyects</span>
        </h2>

        {/* showFilters=false y showAll=false → muestra los primeros 4 sin filtros */}
        {/*<PortfolioGrid showFilters={false} showAll={false} />*/}

        <div style={{ marginTop: 40, textAlign: 'center' }}>
          <Link className="btn btnGhost" href="/portfolio">
            Ver todo el portfolio
          </Link>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          [ CONTACTO ]
      ────────────────────────────────────────────── */}
      <section className="contactSection">
        <h2 className="contactTitle">
          Contáctame
          <br />
          <span className="outline">Colaboremos</span>
        </h2>

        <p className="contactSub">
          Abierto a proyectos de investigación, oportunidades académicas y colaboraciones
          artísticas.
        </p>

        <a
          className="btn btnPrimary"
          style={{ margin: '0 auto', fontSize: 14, padding: '18px 40px' }}
          href="mailto:urrrisaac@gmail.com"
        >
          Escríbeme
        </a>

        <div className="socialLinks">
          <a className="socialLink" href="https://github.com/UrriIsa">
            ⬡ GitHub
          </a>
          <a className="socialLink" href="mailto:urrrisaac@gmail.com">
            ✉ Email
          </a>
        </div>
      </section>

      <footer>
        <span>Urri </span>
        <span>© 2026 Isaac Urrutia</span>
      </footer>
    </>

  )
}
