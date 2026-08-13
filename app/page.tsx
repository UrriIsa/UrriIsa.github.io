'use client'

// importar el use marquee y el grid de components y el hook del reveal
import Link from 'next/link';


export default function Home() {
  // const revealAbout = useReveal()
  // const revealStats = useReveal()

  return (
    <>
      {/* ──────────────────────────────────────────────
          [ YO / HERO ]
      ────────────────────────────────────────────── */}
      <section className="me">
        <div className="meTextCol">
          <span className="meTag">Computación · Biología · Arte</span>

          <h1 className="meName">
            Isaac <br />
            <span className="outline">Urrut</span>
            <span className="accent">ia</span>
          </h1>

          <p className="meDesc">
            Estudiante de Ciencias de la Computación e investigador, conectando academia
            e industria. Enfocado en Inteligencia Artificial, Biotecnología y
            Neurociencia computacional.
          </p>

          <div className="meCTAs">
            <Link className="btn btnPrimary" href="/portfolio">
              Ver Portfolio
            </Link>
            <Link className="btn btnGhost" href="/cv">
              Ver CV
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
            Disponible para colaborar
          </div>

          <div className="meFloatTag meFloatTag2">
            <span className="dot" />
            Hola
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
          Sobre mí
        </div>
        <h2 className="sectionTitle">
          Ciencia &amp; <span className="outline">Arte</span>
        </h2>

        <div className="aboutGrid">
          {/*<div ref={revealAbout} className="aboutText reveal">*/}
            <p>
              Me he centrado en la intersección de la informática y la biología. Sin
              embargo, disfruto aplicando los fundamentos técnicos de la computación en
              contextos interdisciplinarios, por lo que he estado trabajando para ampliar
              mi perspectiva.
            </p>
            <p>
              Mi pasantía de Servicio Social en la Xiloteca del Instituto de Biología de
              la UNAM dio lugar a un proyecto que se presentó en el XXIII Congreso
              Mexicano de Botánica, celebrado en Villahermosa, Tabasco. Actualmente se
              encuentra en proceso de publicación.
            </p>
            <p>Fuera del ámbito académico, el arte es una de mis pasiones.</p>
          {/*</div>/*}

          {/*<div ref={revealStats} className="statsGrid reveal">*/}
            <div className="statCard">
              <div className="statNumber c1">3.66</div>
              <div className="statLabel">GPA / 4.0</div>
            </div>
            <div className="statCard">
              <div className="statNumber c2">3</div>
              <div className="statLabel">Años investigando</div>
            </div>
            <div className="statCard">
              <div className="statNumber c3">1</div>
              <div className="statLabel">Publicaciones en proceso</div>
            </div>
            <div className="statCard">
              <div className="statNumber c4">2</div>
              <div className="statLabel">Estancias / pasantías</div>
            </div>
          {/*</div>*/}
        </div>
      </section>

      <div className="sectionDivider" />

      {/* ──────────────────────────────────────────────
          [ PROYECTOS DESTACADOS ]
      ────────────────────────────────────────────── */}
      <section className="section">
        <div className="sectionLabel">Trabajo reciente</div>
        <h2 className="sectionTitle">
          Proyectos <span className="outline">Destacados</span>
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
