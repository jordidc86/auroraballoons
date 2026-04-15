const highlights = [
  'Vuelos al amanecer sobre Segovia',
  '45–60 minutos de vuelo',
  'Experiencia completa de 3–4 horas',
  'Brindis al aterrizar',
  'Paisaje castellano y sierra al fondo',
  'Preparada para conectar con FareHarbor',
]

const steps = [
  {
    title: 'Salida temprana',
    text: 'La experiencia comienza a primera hora, cuando la luz y la atmósfera convierten Segovia en un espectáculo tranquilo y limpio.',
  },
  {
    title: 'Vuelo panorámico',
    text: 'Sobrevuela el paisaje segoviano, contempla el campo abierto y disfruta de una perspectiva amplia, serena y muy especial.',
  },
  {
    title: 'Aterrizaje y brindis',
    text: 'Tras el vuelo, cerramos la experiencia con un final elegante y memorable, pensado para que el recuerdo quede completo.',
  },
]

const faq = [
  {
    q: '¿Cuánto dura la experiencia?',
    a: 'El vuelo suele durar entre 45 y 60 minutos. La actividad completa normalmente ocupa entre 3 y 4 horas contando preparación, inflado, vuelo y regreso.',
  },
  {
    q: '¿A qué hora se vuela?',
    a: 'Normalmente al amanecer, cuando el aire es más estable y la luz sobre Segovia es especialmente bonita.',
  },
  {
    q: '¿Qué pasa si hace mal tiempo?',
    a: 'La seguridad es siempre lo primero. Si las condiciones no son adecuadas, se propondrá cambio de fecha.',
  },
  {
    q: '¿Qué ropa conviene llevar?',
    a: 'Recomendamos ropa cómoda, calzado cerrado y vestimenta adecuada a la temperatura del día.',
  },
]

export default function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <a href="#inicio" className="brand" aria-label="Aurora Balloons">
            <span className="brand-mark">A</span>
            <span>
              <strong>Aurora Balloons</strong>
              <small>Segovia</small>
            </span>
          </a>

          <nav className="nav">
            <a href="#experiencia">Experiencia</a>
            <a href="#galeria">Galería</a>
            <a href="#faq">FAQ</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <a className="button button-primary" href="mailto:info@auroraballoons.com">
            Consultar disponibilidad
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero hero-photo">
          <div className="hero-overlay" />
          <div className="container hero-layout">
            <div className="hero-panel">
              <div className="eyebrow">Vuelos en globo en Segovia</div>
              <h1>Segovia desde el aire, con una mirada más elegante</h1>
              <p className="hero-copy hero-copy-light">
                Aurora Balloons presenta una experiencia visualmente cuidada, tranquila y premium.
                Una web pensada para transmitir confianza desde el primer segundo y convertir visitas en reservas.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="mailto:info@auroraballoons.com">
                  Solicitar información
                </a>
                <a className="button button-ghost" href="tel:+34605087478">
                  Llamar ahora
                </a>
              </div>

              <ul className="stats stats-overlay" aria-label="Datos clave">
                <li>
                  <strong>120 €</strong>
                  <span>precio orientativo desde</span>
                </li>
                <li>
                  <strong>45–60 min</strong>
                  <span>de vuelo</span>
                </li>
                <li>
                  <strong>3–4 h</strong>
                  <span>de experiencia total</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Qué transmite la marca</span>
              <h2>Una base visual sobria, cálida y premium</h2>
              <p>
                La nueva propuesta combina paisaje real, tonos arena y una composición limpia para proyectar una sensación cuidada, cercana y de mayor valor percibido.
              </p>
            </div>

            <div className="grid cards-3">
              {highlights.map((item) => (
                <article className="card" key={item}>
                  <h3>{item}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="galeria" className="section section-alt">
          <div className="container">
            <div className="section-heading narrow">
              <span className="eyebrow">Imagen real</span>
              <h2>Una web que ya empieza a parecer una marca de verdad</h2>
            </div>

            <div className="gallery-feature">
              <img src="/images/aurora-segovia-hero.jpg" alt="Paisaje de Segovia visto desde un globo aerostático" />
              <div className="gallery-copy card">
                <h3>Paisaje auténtico, percepción más premium</h3>
                <p>
                  Integrar fotografía real mejora mucho la credibilidad de la marca. La home deja de sentirse provisional y empieza a transmitir experiencia real, entorno, amplitud y calma.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="experiencia" className="section">
          <div className="container">
            <div className="section-heading narrow">
              <span className="eyebrow">La experiencia</span>
              <h2>Todo el recorrido explicado con claridad</h2>
            </div>

            <div className="grid cards-3">
              {steps.map((step, index) => (
                <article className="card step-card" key={step.title}>
                  <div className="step-number">0{index + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container split-panel">
            <div>
              <span className="eyebrow">Preparada para reservar</span>
              <h2>La web queda lista para integrar FareHarbor</h2>
              <p>
                La estructura sigue enfocada a captación y conversión, pero sin depender aún de un sistema provisional. Así podrás conectar FareHarbor después sin rehacer la base ni el estilo.
              </p>
            </div>

            <div className="contact-card">
              <h3>Contacto actual</h3>
              <ul>
                <li><strong>Teléfono:</strong> <a href="tel:+34605087478">605 087 478</a></li>
                <li><strong>Email:</strong> <a href="mailto:info@auroraballoons.com">info@auroraballoons.com</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="container">
            <div className="section-heading narrow">
              <span className="eyebrow">Preguntas frecuentes</span>
              <h2>Información práctica para el cliente</h2>
            </div>

            <div className="faq-list">
              {faq.map((item) => (
                <details className="faq-item" key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contacto" className="footer">
        <div className="container footer-grid">
          <div>
            <h3>Aurora Balloons</h3>
            <p>
              Vuelos en globo en Segovia con una propuesta visual elegante y una base técnica lista para publicar en Netlify.
            </p>
          </div>

          <div>
            <h4>Contacto</h4>
            <ul className="footer-list">
              <li><a href="tel:+34605087478">605 087 478</a></li>
              <li><a href="mailto:info@auroraballoons.com">info@auroraballoons.com</a></li>
            </ul>
          </div>

          <div>
            <h4>Legal</h4>
            <ul className="footer-list">
              <li><a href="/aviso-legal.html">Aviso legal</a></li>
              <li><a href="/politica-privacidad.html">Política de privacidad</a></li>
              <li><a href="/politica-cookies.html">Política de cookies</a></li>
              <li><a href="/condiciones-reserva.html">Condiciones de reserva</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
