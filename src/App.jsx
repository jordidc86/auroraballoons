import React, { useState, useEffect } from 'react';
import './styles.css';

const packages = [
  {
    name: 'Vuelo Clásico',
    price: '120€',
    features: [
      'Vuelo al amanecer (45-60 min)',
      'Brindis con Cava tras el aterrizaje',
      'Desayuno tradicional completo',
      'Diploma de vuelo acreditativo',
      'Transporte desde el punto de encuentro',
      'Reportaje fotográfico y vídeo'
    ],
    cta: 'Reservar Experiencia',
    link: 'https://fareharbor.com/embeds/book/auroraballoons/items/723220/?full-items=yes&flow=no'
  },
  {
    name: 'Vuelo Privado',
    price: '1200€',
    features: [
      'Cesta exclusiva para 2 personas',
      'Atención personalizada 100%',
      'Brindis premium en el aire',
      'Desayuno gourmet privado',
      'Recogida en hotel (Segovia)',
      'Vídeo HD de la experiencia'
    ],
    cta: 'Solicitar Exclusividad',
    link: 'https://fareharbor.com/embeds/book/auroraballoons/?full-items=yes&flow=1615337'
  },
  {
    name: 'Grupos y Empresas',
    price: 'Consultar',
    features: [
      'Vuelos simultáneos para grupos',
      'Team building y eventos corporativos',
      'Personalización de pancartas',
      'Catering especial opcional',
      'Coordinación logística completa',
      'Seguro de actividad incluido'
    ],
    cta: 'Pedir Presupuesto',
    link: 'mailto:info@auroraballoons.eu'
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="site-wrapper">
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <a href="#" className="logo">AURORA BALLOONS</a>
          <div className="nav-links">
            <a href="#experiencia">La Experiencia</a>
            <a href="#vuelos">Vuelos</a>
            <a href="#galeria">Galería</a>
            <a href="#contacto">Contacto</a>
          </div>
          <a href="https://fareharbor.com/embeds/book/auroraballoons/?full-items=yes&flow=1615337" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.8rem 1.5rem', fontSize: '0.8rem' }}>Reservar</a>
        </div>
      </nav>

      <section className="hero" style={{ backgroundImage: 'url("/images/photo1.jpg")' }}>
        <div className="container">
          <div className="hero-content animate">
            <span style={{ color: 'var(--accent)', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.9rem', fontWeight: '600' }}>Vuelos en Globo en Segovia</span>
            <h1>Toca el cielo, <br />abraza la historia</h1>
            <p>Descubre la magia de Segovia desde una perspectiva privilegiada. Un viaje sereno al amanecer sobre monumentos milenarios y paisajes infinitos.</p>
            <div className="hero-actions">
              <a href="#vuelos" className="btn btn-primary">Ver Vuelos</a>
              <a href="#experiencia" className="btn" style={{ color: 'white', marginLeft: '1rem', border: '1px solid white' }}>Saber más</a>
            </div>
          </div>
        </div>
      </section>

      <section id="experiencia" className="section">
        <div className="container">
          <div className="section-title">
            <span>El Ritual de Vuelo</span>
            <h2>Más que un viaje, un recuerdo eterno</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div className="animate">
              <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--accent)' }}>El Amanecer de una Aventura</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Nuestra jornada comienza cuando la ciudad aún duerme. Participarás en el emocionante proceso de inflado del globo, sintiendo cómo el gigante despierta con las primeras luces del día.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Una vez en el aire, el silencio solo se rompe por el suave rugido del quemador. Segovia se despliega ante ti: el Alcázar como un barco de piedra, la Catedral como un faro y el Acueducto trazando la historia en el suelo.
              </p>
              <ul className="package-features" style={{ background: 'transparent', padding: 0 }}>
                <li>Pilotos expertos con miles de horas de vuelo</li>
                <li>Máxima seguridad y equipamiento renovado</li>
                <li>Una experiencia íntima y personalizada</li>
              </ul>
            </div>
            <div className="gallery-item tall animate" style={{ borderRadius: '20px' }}>
              <img src="/images/photo2.jpg" alt="Preparación del globo" style={{ borderRadius: '20px' }} />
            </div>
          </div>
        </div>
      </section>

      <section id="vuelos" className="section" style={{ background: '#0d0d1a' }}>
        <div className="container">
          <div className="section-title">
            <span>Nuestras Tarifas</span>
            <h2>Elige tu forma de volar</h2>
          </div>
          <div className="packages-grid">
            {packages.map((pkg, i) => (
              <div key={i} className="package-card animate" style={{ animationDelay: `${i * 0.2}s` }}>
                <h3>{pkg.name}</h3>
                <div className="package-price">{pkg.price}</div>
                <ul className="package-features">
                  {pkg.features.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
                <a href={pkg.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>{pkg.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="section">
        <div className="container">
          <div className="section-title">
            <span>Momentos Aurora</span>
            <h2>Galería de Experiencias</h2>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item wide animate"><img src="/images/photo3.jpg" alt="Vistas de Segovia" /></div>
            <div className="gallery-item tall animate"><img src="/images/photo4.jpg" alt="Cesta del globo" /></div>
            <div className="gallery-item animate"><img src="/images/photo5.jpg" alt="Vuelo en formación" /></div>
            <div className="gallery-item animate"><img src="/images/photo6.jpg" alt="Aterrizaje" /></div>
            <div className="gallery-item wide animate"><img src="/images/photo7.jpg" alt="Brindis con cava" /></div>
            <div className="gallery-item animate"><img src="/images/photo8.jpg" alt="Detalle del globo" /></div>
          </div>
        </div>
      </section>

      <section id="contacto" className="section" style={{ background: 'var(--accent)', color: 'var(--primary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>¿Listo para el despegue?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', marginInline: 'auto' }}>
            Reserva hoy tu plaza o regala una experiencia que cambiará tu forma de ver el mundo. Estamos a tu disposición para cualquier duda.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <a href="mailto:info@auroraballoons.eu" className="btn" style={{ background: 'var(--primary)', color: 'white' }}>Enviar Email</a>
            <a href="tel:+34605087478" className="btn" style={{ border: '2px solid var(--primary)', color: 'var(--primary)' }}>Llamar: 605 087 478</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <h4 className="logo">AURORA BALLOONS</h4>
              <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
                Especialistas en crear recuerdos inolvidables sobre los cielos de Castilla. Calidad, seguridad y pasión en cada vuelo.
              </p>
            </div>
            <div>
              <h4>Explorar</h4>
              <ul className="footer-links">
                <li><a href="#experiencia">La Experiencia</a></li>
                <li><a href="#vuelos">Vuelos</a></li>
                <li><a href="#galeria">Galería</a></li>
                <li><a href="#contacto">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4>Legal</h4>
              <ul className="footer-links">
                <li><a href="/politica-privacidad.html">Privacidad</a></li>
                <li><a href="/aviso-legal.html">Aviso Legal</a></li>
                <li><a href="/condiciones-reserva.html">Condiciones</a></li>
              </ul>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '4rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Aurora Balloons. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
