const highlights = [
  'Vuelos al amanecer sobre Segovia',
  '45–60 minutos de vuelo',
  'Experiencia completa de 3–4 horas',
  'Brindis al aterrizar',
  'Equipo profesional y cercano',
  'Preparada para conectar con FareHarbor',
]

const steps = [
  {
    title: 'Reserva tu fecha',
    text: 'Muy pronto podrás reservar directamente online. De momento, la web queda preparada para integrar FareHarbor sin rehacer el diseño.',
  },
  {
    title: 'Despega al amanecer',
    text: 'Volamos a primera hora para disfrutar de la mejor luz y de las condiciones más favorables para la actividad.',
  },
  {
    title: 'Brinda y recuérdalo',
    text: 'Tras el aterrizaje, celebramos la experiencia con un brindis y un final elegante, tranquilo y memorable.',
  },
]

const faq = [
  {
    q: '¿Cuánto dura la experiencia?',
    a: 'El vuelo suele durar entre 45 y 60 minutos. La actividad completa normalmente ocupa entre 3 y 4 horas contando preparación, inflado, vuelo y regreso.',
  },
  {
    q: '¿A qué hora se vuela?',
    a: 'Normalmente al amanecer, cuando el aire es más estable y Segovia ofrece una luz espectacular desde el globo.',
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
            <a href="#faq">FAQ</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <a className="button button-primary" href="mailto:info@auroraballoons.com">
            Consultar disponibilidad
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">Vuelos en globo en Segovia</div>
              <h1>Una forma elegante de descubrir Segovia desde el cielo</h1>
              <p className="hero-copy">
                Aurora Balloons nace como una marca de vuelos en globo con una imagen cuidada,
                clara y premium. Esta web está pensada para convertir, transmitir confianza y quedar
                lista para integrar tu sistema de reservas.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="mailto:info@auroraballoons.com">
                  Solicitar información
                </a>
                <a className="button button-secondary" href="tel:+34605087478">
                  Llamar ahora
                </a>
              </div>

              <ul className="stats" aria-label="Datos clave">
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

            <div className="hero-card" aria-hidden="true">
              <div className="sky-card">
                <div className="mini-badge">Aurora Signature Flight</div>
                <div className="sky-illustration">
                  <div className="sun" />
                  <div className="balloon balloon-large" />
                  <div className="balloon balloon-small" />
                  <div className="horizon" />
                </div>
                <div className="card-copy">
                  <strong>Diseño preparado para Netlify</strong>
                  <span>Ligero, limpio y listo para seguir creciendo.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Qué transmite la marca</span>
              <h2>Una base visual sobria, cálida y premium</h2>
              <p>
                He elegido una dirección de marca con tonos arena, cobre suave y azul cielo apagado,
                para proyectar una sensación elegante y cercana sin copiar la imagen de Voyager.
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

        <section id="experiencia" className="section section-alt">
          <div className="container">
            <div className="section-heading narrow">
              <span className="eyebrow">La experiencia</span>
              <h2>Todo el recorrido explicado con claridad</h2>
            </div>

            <div className="grid cards-3">
              {steps.map((step) => (
                <article className="card step-card" key={step.title}>
                  <div className="step-number">0{steps.indexOf(step) + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-panel">
            <div>
              <span className="eyebrow">Preparada para reservar</span>
              <h2>La web queda lista para integrar FareHarbor</h2>
              <p>
                He dejado la estructura enfocada a captación y conversión, pero sin bloquearla con un
                sistema provisional de reservas. Así podrás conectar FareHarbor más adelante con menos fricción.
              </p>
            </div>

            <div className="contact-card">
              <h3>Contacto actual</h3>
              <ul>
                <li><strong>Teléfono:</strong> <a href="tel:+34605087478">605 087 478</a></li>
                <li><strong>Email:</strong> <a href="mailto:info@auroraballoons.com">info@auroraballoons.com</a></li>
                <li><strong>Empresa:</strong> Balloon Consulting S.L.</li>
                <li><strong>Marca comercial:</strong> Aurora Balloons</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="faq" className="section section-alt">
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
              Vuelos en globo en Segovia con una propuesta visual elegante y una base técnica lista
              para publicar en Netlify.
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
