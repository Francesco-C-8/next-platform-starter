import { useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, MapPin, Briefcase, Clock, Mail, Phone, Users, Building, Handshake, FileText, Target, Heart, Lightbulb, Shield, Zap, TrendingUp, Package, Headphones, Search, Send, Upload } from "lucide-react";

// Navigation Component
const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="main-nav" data-testid="main-navigation">
      <div className="rocard-container nav-container">
        <NavLink to="/" className="nav-logo" data-testid="nav-logo">
          <img src="https://customer-assets.emergentagent.com/job_rocard-careers/artifacts/36kv6bld_images.jpeg" alt="Rocard" style={{ height: '40px' }} />
        </NavLink>
        
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} data-testid="nav-menu">
          <li className={`nav-dropdown ${dropdownOpen ? 'active' : ''}`}>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); setDropdownOpen(!dropdownOpen); }}
              data-testid="nav-azienda-dropdown"
            >
              Azienda <ChevronDown size={16} style={{ marginLeft: '4px', display: 'inline' }} />
            </a>
            <div className="nav-dropdown-menu">
              <NavLink to="/chi-siamo" data-testid="nav-chi-siamo">Chi siamo</NavLink>
              <NavLink to="/vision-valori" data-testid="nav-vision-valori">Vision & Valori</NavLink>
              <NavLink to="/nostro-modello" data-testid="nav-nostro-modello">Il nostro modello</NavLink>
              <NavLink to="/numeri-crescita" data-testid="nav-numeri-crescita">Numeri & Crescita</NavLink>
              <NavLink to="/team" data-testid="nav-team">Il team</NavLink>
              <NavLink to="/lavora-con-noi" data-testid="nav-lavora-con-noi">Lavora con noi</NavLink>
              <NavLink to="/contatti-aziendali" data-testid="nav-contatti-aziendali">Contatti aziendali</NavLink>
            </div>
          </li>
          <li><NavLink to="/lavora-con-noi" data-testid="nav-careers">Lavora con noi</NavLink></li>
          <li><NavLink to="/contatti-aziendali" data-testid="nav-contacts">Contatti</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

// Footer Component
const Footer = () => (
  <footer className="main-footer" data-testid="main-footer">
    <div className="rocard-container">
      <div className="footer-grid">
        <div>
          <div className="footer-logo"><img src="https://customer-assets.emergentagent.com/job_rocard-careers/artifacts/36kv6bld_images.jpeg" alt="Rocard" style={{ height: '36px' }} /></div>
          <p className="footer-desc">
            Da oltre 10 anni, Rocard rappresenta l'eccellenza nell'e-commerce italiano. 
            Qualità, affidabilità e un servizio clienti impareggiabile.
          </p>
        </div>
        <div>
          <h4 className="footer-title">Azienda</h4>
          <ul className="footer-links">
            <li><NavLink to="/chi-siamo">Chi siamo</NavLink></li>
            <li><NavLink to="/vision-valori">Vision & Valori</NavLink></li>
            <li><NavLink to="/nostro-modello">Il nostro modello</NavLink></li>
            <li><NavLink to="/numeri-crescita">Numeri & Crescita</NavLink></li>
          </ul>
        </div>
        <div>
          <h4 className="footer-title">Lavora con noi</h4>
          <ul className="footer-links">
            <li><NavLink to="/team">Il team</NavLink></li>
            <li><NavLink to="/lavora-con-noi">Posizioni aperte</NavLink></li>
            <li><NavLink to="/lavora-con-noi#candidatura">Candidatura spontanea</NavLink></li>
          </ul>
        </div>
        <div>
          <h4 className="footer-title">Contatti</h4>
          <ul className="footer-links">
            <li><NavLink to="/contatti-aziendali">Contatti aziendali</NavLink></li>
            <li><a href="mailto:info@rocard.it">info@rocard.it</a></li>
            <li><a href="mailto:rcm21@pec.it">PEC: rcm21@pec.it</a></li>
            <li><a href="tel:+3907731888391">Tel: +39 077 31888391</a></li>
            <li style={{ fontSize: '0.85rem', color: 'var(--rocard-gray-500)', marginTop: '8px' }}>RCM S.r.l. - P.IVA 09736331217</li>
            <li style={{ fontSize: '0.85rem', color: 'var(--rocard-gray-500)' }}>Località Ponte Riccio, snc</li>
            <li style={{ fontSize: '0.85rem', color: 'var(--rocard-gray-500)' }}>80014 Giugliano in Campania (NA)</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 RCM S.r.l. - P.IVA 09736331217 - Località Ponte Riccio, snc – 80014 Giugliano in Campania (NA) - Tutti i diritti riservati</p>
      </div>
    </div>
  </footer>
);

// Home Page
const HomePage = () => (
  <div data-testid="home-page">
    {/* HERO SECTION */}
    <section className="hero-section" data-testid="hero-section">
      <div className="rocard-container">
        <div className="hero-content">
          <h1>Benvenuto in Rocard</h1>
          <p>Da oltre un decennio, siamo il punto di riferimento per l'e-commerce di qualità in Italia. Scopri chi siamo, i nostri valori e unisciti al nostro team.</p>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <NavLink to="/chi-siamo" className="btn btn-primary" data-testid="hero-cta-chi-siamo">Scopri l'Azienda</NavLink>
            <NavLink to="/lavora-con-noi" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }} data-testid="hero-cta-lavora">Lavora con noi</NavLink>
          </div>
        </div>
        <div className="hero-accent"></div>
      </div>
    </section>

    {/* NUMBERS PREVIEW */}
    <section className="section" data-testid="numbers-preview">
      <div className="rocard-container">
        <div className="numbers-grid">
          <div className="number-card">
            <div className="number-value">~750K</div>
            <div className="number-label">Spedizioni/Anno</div>
          </div>
          <div className="number-card">
            <div className="number-value">2.000+</div>
            <div className="number-label">Prodotti a Catalogo</div>
          </div>
          <div className="number-card">
            <div className="number-value">~10</div>
            <div className="number-label">Collaboratori</div>
          </div>
          <div className="number-card">
            <div className="number-value">1.000</div>
            <div className="number-label">mq di Magazzino</div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="cta-section" data-testid="cta-section">
      <div className="rocard-container">
        <h2>Entra a far parte del team Rocard</h2>
        <p>Cerchiamo persone appassionate e motivate per crescere insieme.</p>
        <NavLink to="/lavora-con-noi" className="btn" data-testid="cta-lavora">Scopri le posizioni aperte</NavLink>
      </div>
    </section>
  </div>
);

// Chi Siamo Page - replica della pagina live rocard.it/chi-siamo/
const ChiSiamoPage = () => (
  <div data-testid="chi-siamo-page">
    {/* HERO con immagine sede */}
    <section className="chi-siamo-hero" data-testid="chi-siamo-hero">
      <div className="chi-siamo-hero-img-wrap">
        <img src="https://customer-assets.emergentagent.com/job_authority-design-1/artifacts/lyxjn2y2_ChatGPT-Image-11-mar-2026-14_34_33-1.png" alt="Rocard - Sede aziendale" className="chi-siamo-hero-img" />
        <div className="chi-siamo-hero-overlay"></div>
      </div>
    </section>

    {/* LA NOSTRA STORIA */}
    <section className="section">
      <div className="rocard-container">
        <p className="section-label">La Nostra Storia</p>
        <h2 className="section-heading-lg">Rocard, il partner affidabile per i tuoi acquisti online</h2>
        <div style={{ maxWidth: '800px' }}>
          <p style={{ color: 'var(--rocard-gray-600)', marginBottom: '16px', fontSize: '1.05rem' }}>
            Rocard nasce con l'obiettivo di offrire ai clienti un e-commerce affidabile, con prodotti selezionati accuratamente, spedizioni rapide e un'esperienza d'acquisto semplice e sicura. Ogni giorno lavoriamo per garantire qualità, convenienza e un servizio clienti impeccabile.
          </p>
          <p style={{ color: 'var(--rocard-gray-600)', fontSize: '1.05rem' }}>
            La nostra missione è rendere lo shopping online un'esperienza piacevole e senza preoccupazioni, offrendo solo il meglio ai nostri clienti.
          </p>
        </div>
      </div>
    </section>

    {/* I NUMERI DI ROCARD */}
    <section className="section section-light">
      <div className="rocard-container">
        <p className="section-label center">I Nostri Risultati</p>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>I Numeri di Rocard</h2>
        <div className="numbers-grid">
          <div className="number-card">
            <div className="number-value">+1.200</div>
            <div className="number-label">Prodotti Disponibili</div>
            <div className="number-desc">Catalogo in continua espansione</div>
          </div>
          <div className="number-card">
            <div className="number-value">2.000+</div>
            <div className="number-label">Spedizioni al Giorno</div>
            <div className="number-desc">Consegne puntuali e sicure</div>
          </div>
          <div className="number-card">
            <div className="number-value">730.000+</div>
            <div className="number-label">Clienti Soddisfatti</div>
            <div className="number-desc">Ogni anno scegliamo insieme</div>
          </div>
          <div className="number-card highlight-card">
            <div className="number-value">4.8 <span style={{ fontSize: '1.5rem', color: '#D4AF37' }}>&#9733;</span></div>
            <div className="number-label">Valutazione Media</div>
            <div className="number-desc">Eccellenza certificata</div>
          </div>
        </div>
      </div>
    </section>

    {/* I SERVIZI ROCARD */}
    <section className="section">
      <div className="rocard-container">
        <p className="section-label center">Perché Sceglierci</p>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>I Servizi Rocard</h2>
        <div className="values-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <div className="value-card" style={{ borderLeft: 'none', textAlign: 'center' }}>
            <div className="value-icon" style={{ margin: '0 auto 16px' }}><Package /></div>
            <h4>Resi Semplici</h4>
            <p>Procedura di reso chiara, veloce e senza complicazioni. La tua soddisfazione è la nostra priorità.</p>
          </div>
          <div className="value-card" style={{ borderLeft: 'none', textAlign: 'center' }}>
            <div className="value-icon" style={{ margin: '0 auto 16px' }}><Shield /></div>
            <h4>Pagamenti Sicuri</h4>
            <p>Transazioni protette con i più alti standard di sicurezza. I tuoi dati sono sempre al sicuro.</p>
          </div>
          <div className="value-card" style={{ borderLeft: 'none', textAlign: 'center' }}>
            <div className="value-icon" style={{ margin: '0 auto 16px' }}><Send /></div>
            <h4>Spedizioni Rapide</h4>
            <p>Consegne veloci in tutta Italia con tracking in tempo reale. Sempre informato, sempre tranquillo.</p>
          </div>
          <div className="value-card" style={{ borderLeft: 'none', textAlign: 'center' }}>
            <div className="value-icon" style={{ margin: '0 auto 16px' }}><Target /></div>
            <h4>Trusted Shops</h4>
            <p>Acquisti protetti e certificati. La garanzia di un e-commerce affidabile e verificato.</p>
          </div>
        </div>
      </div>
    </section>

    {/* TESTIMONIALS */}
    <section className="section section-light">
      <div className="rocard-container">
        <p className="section-label center">Cosa Dicono di Noi</p>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>La Fiducia dei Nostri Clienti</h2>
        <div className="values-grid">
          <div className="value-card" style={{ borderLeft: 'none', textAlign: 'center', padding: '30px' }}>
            <div style={{ color: '#D4AF37', fontSize: '1.2rem', marginBottom: '12px' }}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p style={{ fontStyle: 'italic', marginBottom: '16px' }}>"Spedizione velocissima e servizio clienti eccellente. Consiglio vivamente Rocard a tutti."</p>
            <p style={{ fontWeight: '600', color: 'var(--rocard-blue)' }}>Marco R.</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--rocard-gray-600)' }}>Cliente Verificato</p>
          </div>
          <div className="value-card" style={{ borderLeft: 'none', textAlign: 'center', padding: '30px' }}>
            <div style={{ color: '#D4AF37', fontSize: '1.2rem', marginBottom: '12px' }}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p style={{ fontStyle: 'italic', marginBottom: '16px' }}>"Ordine arrivato rapidamente e perfettamente imballato. Prodotti di qualità e prezzi competitivi."</p>
            <p style={{ fontWeight: '600', color: 'var(--rocard-blue)' }}>Laura G.</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--rocard-gray-600)' }}>Cliente Verificato</p>
          </div>
          <div className="value-card" style={{ borderLeft: 'none', textAlign: 'center', padding: '30px' }}>
            <div style={{ color: '#D4AF37', fontSize: '1.2rem', marginBottom: '12px' }}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p style={{ fontStyle: 'italic', marginBottom: '16px' }}>"Sito affidabile con prezzi imbattibili. Sono diventato un cliente abituale dopo il primo ordine."</p>
            <p style={{ fontWeight: '600', color: 'var(--rocard-blue)' }}>Giuseppe M.</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--rocard-gray-600)' }}>Cliente Verificato</p>
          </div>
        </div>
      </div>
    </section>

    {/* SOSTENIBILITA' - TREEDOM */}
    <section className="section">
      <div className="rocard-container">
        <p className="section-label">Sostenibilità</p>
        <h2 style={{ marginBottom: '20px' }}>Il Nostro Impegno per l'Ambiente</h2>
        <p style={{ color: 'var(--rocard-gray-600)', maxWidth: '700px', marginBottom: '24px', fontSize: '1.05rem' }}>
          Rocard sostiene attivamente progetti di riforestazione attraverso <strong>Treedom</strong>, contribuendo alla tutela dell'ambiente e alla lotta contro il cambiamento climatico. Ogni acquisto è un piccolo passo verso un futuro più verde.
        </p>
        <img src="https://www.rocard.it/wp-content/uploads/2026/03/Treedom_Logo_Green-on-White-PayOff.webp" alt="Treedom" style={{ height: '50px' }} />
      </div>
    </section>

    {/* CORRIERI PARTNER */}
    <section className="section section-light">
      <div className="rocard-container">
        <p className="section-label center">Logistica Affidabile</p>
        <h2 style={{ textAlign: 'center', marginBottom: '16px' }}>Corrieri Partner</h2>
        <p style={{ textAlign: 'center', color: 'var(--rocard-gray-600)', marginBottom: '40px' }}>Collaboriamo con i migliori corrieri nazionali per garantirti consegne sempre puntuali e sicure.</p>
        <div className="couriers-grid">
          <div className="courier-card">
            <img src="/images/gls-logo.png" alt="GLS - Corriere partner Rocard" />
          </div>
          <div className="courier-card">
            <img src="/images/brt-logo.svg" alt="BRT - Corriere partner Rocard" />
          </div>
          <div className="courier-card">
            <img src="/images/poste-italiane-logo.png" alt="Poste Italiane - Corriere partner Rocard" />
          </div>
        </div>
      </div>
    </section>

    {/* VISIONE FUTURA */}
    <section className="section">
      <div className="rocard-container" style={{ textAlign: 'center', maxWidth: '800px' }}>
        <p className="section-label center">Visione</p>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Un E-commerce in Continua Evoluzione</h2>
        <p style={{ color: 'var(--rocard-gray-600)', marginBottom: '16px', fontSize: '1.05rem' }}>
          Il mondo dell'e-commerce è in continua evoluzione e Rocard continua a investire nel miglioramento del servizio, nell'ampliamento del catalogo e nell'ottimizzazione delle spedizioni.
        </p>
        <p style={{ color: 'var(--rocard-gray-600)', marginBottom: '30px', fontSize: '1.05rem' }}>
          Il nostro obiettivo è crescere insieme ai nostri clienti, offrendo un'esperienza d'acquisto sempre più semplice, veloce e affidabile.
        </p>
        <a href="https://www.rocard.it/shop/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Scopri i Nostri Prodotti
        </a>
      </div>
    </section>

    {/* TRUST BADGES */}
    <section className="section section-light">
      <div className="rocard-container">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--rocard-blue)', fontWeight: '500' }}>
            <Shield size={20} /> <span>Acquisti Sicuri</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--rocard-blue)', fontWeight: '500' }}>
            <Send size={20} /> <span>Spedizione Veloce</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--rocard-blue)', fontWeight: '500' }}>
            <Package size={20} /> <span>Reso Facile</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--rocard-blue)', fontWeight: '500' }}>
            <Target size={20} /> <span>Qualità Garantita</span>
          </div>
        </div>
      </div>
    </section>
  </div>
);

// Vision & Valori Page
const VisionValoriPage = () => (
  <div data-testid="vision-valori-page">
    {/* HERO */}
    <section className="hero-section">
      <div className="rocard-container">
        <div className="hero-content">
          <h1>Vision & Valori</h1>
          <p>I principi che guidano ogni nostra decisione e azione quotidiana.</p>
        </div>
        <div className="hero-accent"></div>
      </div>
    </section>

    {/* VISION */}
    <section className="section">
      <div className="rocard-container">
        <div className="content-block">
          <div className="content-block-text">
            <h3>La nostra Vision</h3>
            <p>Diventare il punto di riferimento dell'e-commerce italiano per qualità del servizio, affidabilità e rapporto con il cliente.</p>
            <p>Immaginiamo un futuro in cui ogni italiano possa acquistare online con la stessa fiducia di un negozio di fiducia sotto casa: prodotti garantiti, prezzi onesti, consegne puntuali.</p>
          </div>
          <div className="content-block-image">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" alt="Vision Rocard" />
          </div>
        </div>
      </div>
    </section>

    {/* VALORI */}
    <section className="section section-light">
      <div className="rocard-container">
        <div className="section-title">
          <h2>I Nostri Valori</h2>
          <p>Cinque pilastri che definiscono chi siamo e come operiamo.</p>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon"><Shield /></div>
            <h4>Affidabilità</h4>
            <p>Manteniamo sempre le promesse fatte ai nostri clienti. Se diciamo che il pacco arriva in 48 ore, arriva in 48 ore.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"><Heart /></div>
            <h4>Passione</h4>
            <p>Amiamo quello che facciamo. Ogni ordine, ogni cliente, ogni problema risolto è una soddisfazione.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"><Lightbulb /></div>
            <h4>Innovazione</h4>
            <p>Investiamo costantemente in tecnologia e processi per offrire un'esperienza sempre migliore.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"><Users /></div>
            <h4>Collaborazione</h4>
            <p>Il successo di Rocard è il risultato del lavoro di squadra. Ogni reparto contribuisce al risultato finale.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"><Target /></div>
            <h4>Eccellenza</h4>
            <p>Non ci accontentiamo mai. Puntiamo sempre al meglio in ogni aspetto del nostro lavoro.</p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="cta-section">
      <div className="rocard-container">
        <h2>Condividi i nostri valori?</h2>
        <p>Unisciti al team Rocard e cresci con noi.</p>
        <NavLink to="/lavora-con-noi" className="btn">Lavora con noi</NavLink>
      </div>
    </section>
  </div>
);

// Il Nostro Modello Page
const NostroModelloPage = () => (
  <div data-testid="nostro-modello-page">
    {/* HERO */}
    <section className="hero-section">
      <div className="rocard-container">
        <div className="hero-content">
          <h1>Il Nostro Modello</h1>
          <p>Un ecosistema integrato per garantire la massima efficienza e qualità del servizio.</p>
        </div>
        <div className="hero-accent"></div>
      </div>
    </section>

    {/* ECOMMERCE */}
    <section className="section">
      <div className="rocard-container">
        <div className="content-block">
          <div className="content-block-text">
            <h3>E-commerce di Nuova Generazione</h3>
            <p>La nostra piattaforma e-commerce è progettata per offrire un'esperienza d'acquisto fluida e intuitiva su ogni dispositivo.</p>
            <p>Investiamo costantemente in UX/UI, performance e funzionalità per rendere ogni acquisto semplice e piacevole.</p>
          </div>
          <div className="content-block-image">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" alt="Piattaforma ecommerce" />
          </div>
        </div>
      </div>
    </section>

    {/* LOGISTICA */}
    <section className="section section-light">
      <div className="rocard-container">
        <div className="content-block reverse">
          <div className="content-block-text">
            <h3>Logistica Integrata</h3>
            <p>Il nostro centro logistico di 1.000 mq ci permette di gestire circa 2.000 ordini al giorno con efficienza e precisione.</p>
            <p>Sistemi WMS avanzati, picking ottimizzato e partnership con i migliori corrieri garantiscono consegne rapide in tutta Italia.</p>
          </div>
          <div className="content-block-image">
            <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop" alt="Centro logistico" />
          </div>
        </div>
      </div>
    </section>

    {/* CUSTOMER CARE */}
    <section className="section">
      <div className="rocard-container">
        <div className="content-block">
          <div className="content-block-text">
            <h3>Customer Care Excellence</h3>
            <p>Il nostro team di assistenza clienti è formato per risolvere ogni problematica con competenza e cortesia.</p>
            <p>Disponibili via chat, email e telefono, garantiamo risposte rapide e soluzioni concrete.</p>
          </div>
          <div className="content-block-image">
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop" alt="Customer care" />
          </div>
        </div>
      </div>
    </section>

    {/* SELEZIONE PRODOTTI */}
    <section className="section section-light">
      <div className="rocard-container">
        <div className="content-block reverse">
          <div className="content-block-text">
            <h3>Selezione Prodotti Accurata</h3>
            <p>Ogni prodotto nel nostro catalogo viene selezionato con cura da buyer esperti che valutano qualità, prezzo e affidabilità del fornitore.</p>
            <p>Collaboriamo direttamente con i brand più importanti e con produttori selezionati per garantire l'autenticità e la qualità di ogni articolo.</p>
          </div>
          <div className="content-block-image">
            <img src="https://images.unsplash.com/photo-1770013413878-2530e2c3d82b?w=600&h=400&fit=crop" alt="Selezione prodotti" />
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="cta-section">
      <div className="rocard-container">
        <h2>Scopri i nostri numeri</h2>
        <p>I risultati parlano da soli. Scopri la crescita di Rocard.</p>
        <NavLink to="/numeri-crescita" className="btn">Numeri & Crescita</NavLink>
      </div>
    </section>
  </div>
);

// Numeri & Crescita Page
const NumeriCrescitaPage = () => (
  <div data-testid="numeri-crescita-page">
    {/* HERO */}
    <section className="hero-section">
      <div className="rocard-container">
        <div className="hero-content">
          <h1>Numeri & Crescita</h1>
          <p>I risultati di anni di impegno, passione e attenzione al cliente.</p>
        </div>
        <div className="hero-accent"></div>
      </div>
    </section>

    {/* NUMERI */}
    <section className="section">
      <div className="rocard-container">
        <div className="section-title">
          <h2>I Numeri di Rocard</h2>
          <p>Metriche che testimoniano la solidità e l'affidabilità della nostra azienda.</p>
        </div>
        <div className="numbers-grid">
          <div className="number-card">
            <div className="number-value">10M+</div>
            <div className="number-label">Fatturato Annuo</div>
          </div>
          <div className="number-card">
            <div className="number-value">~750K</div>
            <div className="number-label">Spedizioni/Anno</div>
          </div>
          <div className="number-card">
            <div className="number-value">2.000+</div>
            <div className="number-label">Prodotti a Catalogo</div>
          </div>
        </div>
      </div>
    </section>

    {/* ALTRI NUMERI */}
    <section className="section section-light">
      <div className="rocard-container">
        <div className="numbers-grid">
          <div className="number-card">
            <div className="number-value">~10</div>
            <div className="number-label">Collaboratori</div>
          </div>
          <div className="number-card">
            <div className="number-value">1.000</div>
            <div className="number-label">mq di Magazzino</div>
          </div>
          <div className="number-card">
            <div className="number-value">4.9/5</div>
            <div className="number-label">Rating Clienti</div>
          </div>
          <div className="number-card">
            <div className="number-value">48h</div>
            <div className="number-label">Tempo Medio Consegna</div>
          </div>
        </div>
      </div>
    </section>

    {/* CRESCITA */}
    <section className="section">
      <div className="rocard-container">
        <div className="content-block">
          <div className="content-block-text">
            <h3>Una Crescita Costante</h3>
            <p>Dal 2013 ad oggi, Rocard ha registrato una crescita media annua del 25%, consolidando la propria posizione nel mercato e-commerce italiano.</p>
            <p>Questa crescita non è solo nei numeri: è nella qualità del servizio, nella soddisfazione dei clienti, nella competenza del team.</p>
            <div style={{ marginTop: '20px' }}>
              <NavLink to="/lavora-con-noi" className="btn btn-primary">Unisciti alla crescita</NavLink>
            </div>
          </div>
          <div className="content-block-image">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" alt="Crescita aziendale" />
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="cta-section">
      <div className="rocard-container">
        <h2>Conosci il team dietro questi numeri</h2>
        <p>Scopri le persone che rendono possibile tutto questo.</p>
        <NavLink to="/team" className="btn">Il Team</NavLink>
      </div>
    </section>
  </div>
);

// Il Team Page
const TeamPage = () => (
  <div data-testid="team-page">
    {/* HERO */}
    <section className="hero-section">
      <div className="rocard-container">
        <div className="hero-content">
          <h1>Il Team</h1>
          <p>Le persone che ogni giorno rendono Rocard un'eccellenza.</p>
        </div>
        <div className="hero-accent"></div>
      </div>
    </section>

    {/* INTRO */}
    <section className="section">
      <div className="rocard-container">
        <div className="content-block">
          <div className="content-block-text">
            <h3>Il Cuore di Rocard</h3>
            <p>Dietro ogni ordine evaso, ogni problema risolto, ogni cliente soddisfatto c'è un team di circa 10 professionisti appassionati.</p>
            <p>Giovani talenti e professionisti esperti lavorano insieme in un ambiente dinamico, stimolante e orientato ai risultati.</p>
          </div>
          <div className="content-block-image">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" alt="Team Rocard" />
          </div>
        </div>
      </div>
    </section>

    {/* DIVISIONI */}
    <section className="section section-light">
      <div className="rocard-container">
        <div className="section-title">
          <h2>Le Nostre Divisioni</h2>
          <p>Un'organizzazione strutturata per garantire efficienza e specializzazione.</p>
        </div>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-card-image">
              <Package size={80} />
            </div>
            <div className="team-card-content">
              <h4>Logistica</h4>
              <p>Il team che gestisce il magazzino, le spedizioni e garantisce che ogni pacco arrivi perfetto a destinazione.</p>
            </div>
          </div>
          <div className="team-card">
            <div className="team-card-image">
              <Headphones size={80} />
            </div>
            <div className="team-card-content">
              <h4>Customer Care</h4>
              <p>Professionisti dedicati all'assistenza clienti, sempre pronti a risolvere ogni problematica con cortesia.</p>
            </div>
          </div>
          <div className="team-card">
            <div className="team-card-image">
              <TrendingUp size={80} />
            </div>
            <div className="team-card-content">
              <h4>Marketing</h4>
              <p>Il team creativo che sviluppa strategie, gestisce i canali digitali e costruisce il brand Rocard.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="cta-section">
      <div className="rocard-container">
        <h2>Vuoi far parte del team?</h2>
        <p>Scopri le posizioni aperte e inviaci la tua candidatura.</p>
        <NavLink to="/lavora-con-noi" className="btn">Lavora con noi</NavLink>
      </div>
    </section>
  </div>
);

// Lavora con Noi Page (PRIORITA' ALTA)
const LavoraConNoiPage = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    ruolo: '',
    messaggio: '',
    cv: null,
    privacy: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulazione invio - in WordPress questo sarà gestito da Elementor Form
    console.log('Form data:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const positions = [
    { title: 'Addetto/a Logistica', location: 'Giugliano in Campania', type: 'Full-time', description: 'Gestione magazzino, preparazione ordini, spedizioni' },
    { title: 'Customer Care Specialist', location: 'Giugliano in Campania', type: 'Full-time', description: 'Assistenza clienti multicanale, gestione reclami' },
  ];

  return (
    <div data-testid="lavora-con-noi-page">
      {/* HERO */}
      <section className="hero-section">
        <div className="rocard-container">
          <div className="hero-content">
            <h1>Lavora con Noi</h1>
            <p>Unisciti al team Rocard e costruisci con noi il futuro dell'e-commerce italiano.</p>
          </div>
          <div className="hero-accent"></div>
        </div>
      </section>

      {/* PERCHE' LAVORARE IN ROCARD */}
      <section className="section">
        <div className="rocard-container">
          <div className="section-title">
            <h2>Perché Lavorare in Rocard</h2>
            <p>Un ambiente di lavoro stimolante con opportunità di crescita reali.</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon"><TrendingUp /></div>
              <h4>Crescita Professionale</h4>
              <p>Formazione continua e percorsi di carriera chiari per sviluppare le tue competenze.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><Users /></div>
              <h4>Team Giovane</h4>
              <p>Lavora in un ambiente dinamico con colleghi motivati e appassionati.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><Zap /></div>
              <h4>Innovazione</h4>
              <p>Tecnologie all'avanguardia e processi in continua evoluzione.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><Heart /></div>
              <h4>Lavoro in Sede</h4>
              <p>Non offriamo lavoro da remoto. Crediamo nel valore della collaborazione in presenza nella nostra sede a Giugliano in Campania.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><Shield /></div>
              <h4>Stabilità</h4>
              <p>Azienda solida in crescita con contratti regolari e retribuzioni competitive.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><Lightbulb /></div>
              <h4>Autonomia</h4>
              <p>Responsabilità reali e possibilità di proporre e implementare le tue idee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* POSIZIONI APERTE */}
      <section className="section section-light" data-testid="posizioni-aperte">
        <div className="rocard-container">
          <div className="section-title">
            <h2>Posizioni Aperte</h2>
            <p>Scopri le opportunità disponibili e candidati subito.</p>
          </div>
          <div className="positions-list">
            {positions.map((position, index) => (
              <div className="position-card" key={index} data-testid={`position-card-${index}`}>
                <div className="position-info">
                  <h4>{position.title}</h4>
                  <p style={{ color: 'var(--rocard-gray-600)', marginBottom: '10px' }}>{position.description}</p>
                  <div className="position-meta">
                    <span><MapPin size={16} /> {position.location}</span>
                    <span><Briefcase size={16} /> {position.type}</span>
                  </div>
                </div>
                <a href="#candidatura" className="btn btn-primary" data-testid={`apply-btn-${index}`}>Candidati</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO DI SELEZIONE */}
      <section className="section">
        <div className="rocard-container">
          <div className="section-title">
            <h2>Processo di Selezione</h2>
            <p>Un percorso trasparente e rispettoso del tuo tempo.</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h4>Candidatura</h4>
              <p>Invia il tuo CV e una breve presentazione.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h4>Screening</h4>
              <p>Valutiamo il tuo profilo entro 5 giorni lavorativi.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h4>Colloquio</h4>
              <p>Conosciamoci: parlaci di te e delle tue aspettative.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h4>Proposta</h4>
              <p>Se c'è match, ti presentiamo la nostra offerta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM CANDIDATURA */}
      <section className="section section-light" id="candidatura" data-testid="candidatura-form-section">
        <div className="rocard-container">
          <div className="section-title">
            <h2>Invia la Tua Candidatura</h2>
            <p>Compila il modulo sottostante per candidarti a una posizione aperta o inviare una candidatura spontanea.</p>
          </div>
          
          <div className="form-container">
            {submitted && (
              <div className="success-message" data-testid="form-success-message">
                Grazie per la tua candidatura! Ti contatteremo presto.
              </div>
            )}
            
            <form onSubmit={handleSubmit} data-testid="candidatura-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="nome">Nome *</label>
                  <input 
                    type="text" 
                    id="nome" 
                    name="nome" 
                    required 
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Il tuo nome"
                    data-testid="input-nome"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="cognome">Cognome *</label>
                  <input 
                    type="text" 
                    id="cognome" 
                    name="cognome" 
                    required 
                    value={formData.cognome}
                    onChange={handleChange}
                    placeholder="Il tuo cognome"
                    data-testid="input-cognome"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nome@email.com"
                    data-testid="input-email"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="telefono">Telefono *</label>
                  <input 
                    type="tel" 
                    id="telefono" 
                    name="telefono" 
                    required 
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+39 123 456 7890"
                    data-testid="input-telefono"
                  />
                </div>
                
                <div className="form-group full-width">
                  <label htmlFor="ruolo">Ruolo di interesse *</label>
                  <select 
                    id="ruolo" 
                    name="ruolo" 
                    required
                    value={formData.ruolo}
                    onChange={handleChange}
                    data-testid="select-ruolo"
                  >
                    <option value="">Seleziona un ruolo</option>
                    <option value="logistica">Addetto/a Logistica</option>
                    <option value="customer-care">Customer Care Specialist</option>
                    <option value="spontanea">Candidatura Spontanea</option>
                  </select>
                </div>
                
                <div className="form-group full-width">
                  <label htmlFor="cv">Carica il tuo CV (PDF, DOC, DOCX) *</label>
                  <input 
                    type="file" 
                    id="cv" 
                    name="cv" 
                    accept=".pdf,.doc,.docx"
                    required
                    onChange={handleChange}
                    data-testid="input-cv"
                  />
                </div>
                
                <div className="form-group full-width">
                  <label htmlFor="messaggio">Messaggio / Presentazione</label>
                  <textarea 
                    id="messaggio" 
                    name="messaggio"
                    value={formData.messaggio}
                    onChange={handleChange}
                    placeholder="Raccontaci brevemente di te, delle tue esperienze e perché vorresti lavorare in Rocard..."
                    data-testid="textarea-messaggio"
                  ></textarea>
                </div>
                
                <div className="form-group full-width">
                  <div className="form-checkbox">
                    <input 
                      type="checkbox" 
                      id="privacy" 
                      name="privacy" 
                      required
                      checked={formData.privacy}
                      onChange={handleChange}
                      data-testid="checkbox-privacy"
                    />
                    <label htmlFor="privacy">
                      Ho preso visione della <a href="https://www.rocard.it/privacy-cookie-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a> e acconsento al trattamento dei miei dati personali per le finalità di selezione del personale. *
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="form-submit">
                <button type="submit" className="btn btn-primary" data-testid="submit-candidatura">
                  <Send size={20} /> Invia Candidatura
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="rocard-container">
          <h2>Hai domande?</h2>
          <p>Contatta il nostro ufficio HR per qualsiasi informazione.</p>
          <NavLink to="/contatti-aziendali" className="btn">Contatti Aziendali</NavLink>
        </div>
      </section>
    </div>
  );
};

// Contatti Aziendali Page
const ContattiAziendaliPage = () => (
  <div data-testid="contatti-aziendali-page">
    {/* HERO */}
    <section className="hero-section">
      <div className="rocard-container">
        <div className="hero-content">
          <h1>Contatti Aziendali</h1>
          <p>Canali dedicati per ogni esigenza. Il team giusto per ogni richiesta.</p>
        </div>
        <div className="hero-accent"></div>
      </div>
    </section>

    {/* CONTATTI */}
    <section className="section">
      <div className="rocard-container">
        <div className="section-title">
          <h2>Contattaci</h2>
          <p>Scrivi a un unico indirizzo: il nostro sistema smisterà automaticamente la tua richiesta al reparto competente.</p>
        </div>
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <div className="contact-card" data-testid="contact-unico" style={{ padding: '50px 40px' }}>
            <div className="contact-icon"><Mail /></div>
            <h4>Scrivici</h4>
            <p>HR, Partnership, Fornitori, Amministrazione: un unico punto di contatto per tutte le esigenze aziendali. *Il sistema categorizzerà automaticamente la tua richiesta in base al motivo del contatto.</p>
            <a href="mailto:info@rocard.it" style={{ fontSize: '1.25rem' }}>info@rocard.it</a>
          </div>
        </div>
      </div>
    </section>

    {/* ASSISTENZA CLIENTI */}
    <section className="section section-light">
      <div className="rocard-container">
        <div className="content-block">
          <div className="content-block-text">
            <h3>Sei un Cliente?</h3>
            <p>Per assistenza su ordini, spedizioni, resi e informazioni sui prodotti, il nostro servizio clienti è a tua disposizione.</p>
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={20} color="var(--rocard-orange)" />
                <a href="mailto:info@rocard.it" style={{ fontWeight: '500' }}>info@rocard.it</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={20} color="var(--rocard-orange)" />
                <a href="tel:+3907731888391" style={{ fontWeight: '500' }}>+39 0773 1888391</a>
              </div>
            </div>
            <div style={{ marginTop: '25px' }}>
              <a href="https://www.rocard.it/assistenza/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Vai all'Assistenza Clienti
              </a>
            </div>
          </div>
          <div className="content-block-image">
            <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=600&h=400&fit=crop" alt="Assistenza clienti" />
          </div>
        </div>
      </div>
    </section>

    {/* SEDE */}
    <section className="section">
      <div className="rocard-container">
        <div className="section-title">
          <h2>La Nostra Sede</h2>
          <p>Dove siamo e come raggiungerci.</p>
        </div>
        <div className="content-block">
          <div className="content-block-text">
            <h3>RCM S.r.l.</h3>
            <p><strong>Sede Legale e Operativa:</strong></p>
            <p>Località Ponte Riccio, snc<br />80014 Giugliano in Campania (NA)<br />Italia</p>
            <p style={{ marginTop: '15px' }}><strong>P.IVA:</strong> 09736331217</p>
            <p><strong>Tel:</strong> <a href="tel:+3907731888391">+39 077 31888391</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@rocard.it">info@rocard.it</a></p>
            <p><strong>PEC:</strong> <a href="mailto:rcm21@pec.it">rcm21@pec.it</a></p>
            <p style={{ marginTop: '20px' }}><strong>Orari Uffici:</strong></p>
            <p>Lun - Ven: 9:00 - 18:00<br />Sab - Dom: Chiuso</p>
          </div>
          <div className="content-block-image">
            <img src="https://customer-assets.emergentagent.com/job_authority-design-1/artifacts/lyxjn2y2_ChatGPT-Image-11-mar-2026-14_34_33-1.png" alt="Sede Rocard" />
          </div>
        </div>
      </div>
    </section>
  </div>
);

// HTML Output Page - Mostra codice HTML copiabile
const HTMLOutputPage = () => {
  const location = useLocation();
  
  const copyToClipboard = (text, buttonId) => {
    navigator.clipboard.writeText(text);
    const btn = document.getElementById(buttonId);
    if (btn) {
      btn.textContent = 'Copiato!';
      setTimeout(() => btn.textContent = 'Copia HTML', 2000);
    }
  };

  const htmlSections = [
    {
      title: 'Hero Section',
      code: `<!-- HERO SECTION -->
<section class="hero-section">
  <div class="rocard-container">
    <div class="hero-content">
      <h1>[TITOLO PAGINA]</h1>
      <p>[SOTTOTITOLO / DESCRIZIONE]</p>
    </div>
    <div class="hero-accent"></div>
  </div>
</section>`
    },
    {
      title: 'Content Block (Testo + Immagine)',
      code: `<!-- CONTENT BLOCK - TESTO SINISTRA -->
<section class="section">
  <div class="rocard-container">
    <div class="content-block">
      <div class="content-block-text">
        <h3>[TITOLO SEZIONE]</h3>
        <p>[PARAGRAFO 1]</p>
        <p>[PARAGRAFO 2]</p>
      </div>
      <div class="content-block-image">
        <img src="[URL_IMMAGINE]" alt="[ALT TEXT]" />
      </div>
    </div>
  </div>
</section>

<!-- CONTENT BLOCK - TESTO DESTRA (REVERSE) -->
<section class="section section-light">
  <div class="rocard-container">
    <div class="content-block reverse">
      <div class="content-block-text">
        <h3>[TITOLO SEZIONE]</h3>
        <p>[PARAGRAFO 1]</p>
        <p>[PARAGRAFO 2]</p>
      </div>
      <div class="content-block-image">
        <img src="[URL_IMMAGINE]" alt="[ALT TEXT]" />
      </div>
    </div>
  </div>
</section>`
    },
    {
      title: 'Numbers/Counter Section',
      code: `<!-- NUMBERS SECTION -->
<section class="section">
  <div class="rocard-container">
    <div class="section-title">
      <h2>[TITOLO]</h2>
      <p>[DESCRIZIONE]</p>
    </div>
    <div class="numbers-grid">
      <div class="number-card">
        <div class="number-value">10M+</div>
        <div class="number-label">Fatturato Annuo</div>
      </div>
      <div class="number-card">
        <div class="number-value">150K+</div>
        <div class="number-label">Ordini Evasi</div>
      </div>
      <div class="number-card">
        <div class="number-value">80K+</div>
        <div class="number-label">Clienti</div>
      </div>
      <div class="number-card">
        <div class="number-value">5K+</div>
        <div class="number-label">Prodotti</div>
      </div>
    </div>
  </div>
</section>`
    },
    {
      title: 'Values/Cards Grid',
      code: `<!-- VALUES GRID -->
<section class="section section-light">
  <div class="rocard-container">
    <div class="section-title">
      <h2>[TITOLO]</h2>
      <p>[DESCRIZIONE]</p>
    </div>
    <div class="values-grid">
      <div class="value-card">
        <div class="value-icon">
          <!-- INSERIRE ICONA SVG O FONT ICON -->
        </div>
        <h4>[TITOLO VALORE]</h4>
        <p>[DESCRIZIONE VALORE]</p>
      </div>
      <!-- Ripetere per ogni valore -->
    </div>
  </div>
</section>`
    },
    {
      title: 'CTA Section',
      code: `<!-- CTA SECTION -->
<section class="cta-section">
  <div class="rocard-container">
    <h2>[TITOLO CTA]</h2>
    <p>[DESCRIZIONE CTA]</p>
    <a href="[URL]" class="btn">[TESTO BOTTONE]</a>
  </div>
</section>`
    },
    {
      title: 'Form Candidatura',
      code: `<!-- FORM CANDIDATURA -->
<section class="section section-light" id="candidatura">
  <div class="rocard-container">
    <div class="section-title">
      <h2>Invia la Tua Candidatura</h2>
      <p>Compila il modulo sottostante per candidarti.</p>
    </div>
    
    <div class="form-container">
      <form action="mailto:info@rocard.it" method="POST" enctype="multipart/form-data">
        <div class="form-grid">
          <div class="form-group">
            <label for="nome">Nome *</label>
            <input type="text" id="nome" name="nome" required placeholder="Il tuo nome" />
          </div>
          
          <div class="form-group">
            <label for="cognome">Cognome *</label>
            <input type="text" id="cognome" name="cognome" required placeholder="Il tuo cognome" />
          </div>
          
          <div class="form-group">
            <label for="email">Email *</label>
            <input type="email" id="email" name="email" required placeholder="nome@email.com" />
          </div>
          
          <div class="form-group">
            <label for="telefono">Telefono *</label>
            <input type="tel" id="telefono" name="telefono" required placeholder="+39 123 456 7890" />
          </div>
          
          <div class="form-group full-width">
            <label for="ruolo">Ruolo di interesse *</label>
            <select id="ruolo" name="ruolo" required>
              <option value="">Seleziona un ruolo</option>
              <option value="logistica">Addetto/a Logistica</option>
              <option value="customer-care">Customer Care Specialist</option>
              <option value="marketing">Digital Marketing Specialist</option>
              <option value="ecommerce">E-commerce Manager</option>
              <option value="spontanea">Candidatura Spontanea</option>
            </select>
          </div>
          
          <div class="form-group full-width">
            <label for="cv">Carica il tuo CV *</label>
            <input type="file" id="cv" name="cv" accept=".pdf,.doc,.docx" required />
          </div>
          
          <div class="form-group full-width">
            <label for="messaggio">Messaggio</label>
            <textarea id="messaggio" name="messaggio" placeholder="Raccontaci di te..."></textarea>
          </div>
          
          <div class="form-group full-width">
            <div class="form-checkbox">
              <input type="checkbox" id="privacy" name="privacy" required />
              <label for="privacy">
                Ho preso visione della Privacy Policy e acconsento al trattamento dei dati. *
              </label>
            </div>
          </div>
        </div>
        
        <div class="form-submit">
          <button type="submit" class="btn btn-primary">Invia Candidatura</button>
        </div>
      </form>
    </div>
  </div>
</section>`
    },
    {
      title: 'Posizioni Aperte',
      code: `<!-- POSIZIONI APERTE -->
<section class="section section-light">
  <div class="rocard-container">
    <div class="section-title">
      <h2>Posizioni Aperte</h2>
      <p>Scopri le opportunità disponibili.</p>
    </div>
    <div class="positions-list">
      <div class="position-card">
        <div class="position-info">
          <h4>[TITOLO POSIZIONE]</h4>
          <p>[DESCRIZIONE POSIZIONE]</p>
          <div class="position-meta">
            <span>📍 [SEDE]</span>
            <span>💼 [TIPO CONTRATTO]</span>
          </div>
        </div>
        <a href="#candidatura" class="btn btn-primary">Candidati</a>
      </div>
      <!-- Ripetere per ogni posizione -->
    </div>
  </div>
</section>`
    },
    {
      title: 'Contatti Grid',
      code: `<!-- CONTATTI GRID -->
<section class="section">
  <div class="rocard-container">
    <div class="section-title">
      <h2>Contattaci</h2>
      <p>Scegli il reparto più adatto alla tua richiesta.</p>
    </div>
    <div class="contacts-grid">
      <div class="contact-card">
        <div class="contact-icon">
          <!-- ICONA -->
        </div>
        <h4>[REPARTO]</h4>
        <p>[DESCRIZIONE]</p>
        <a href="mailto:[EMAIL]">[EMAIL]</a>
      </div>
      <!-- Ripetere per ogni contatto -->
    </div>
  </div>
</section>`
    }
  ];

  return (
    <div data-testid="html-output-page">
      <section className="hero-section">
        <div className="rocard-container">
          <div className="hero-content">
            <h1>Codice HTML</h1>
            <p>Template HTML pronti per Elementor. Copia e incolla nelle sezioni HTML.</p>
          </div>
          <div className="hero-accent"></div>
        </div>
      </section>

      <section className="html-output-section">
        <div className="rocard-container">
          {htmlSections.map((section, index) => (
            <div className="html-output-container" key={index} style={{ marginBottom: '30px' }}>
              <div className="html-output-header">
                <h4>{section.title}</h4>
                <button 
                  className="copy-btn" 
                  id={`copy-btn-${index}`}
                  onClick={() => copyToClipboard(section.code, `copy-btn-${index}`)}
                >
                  Copia HTML
                </button>
              </div>
              <div className="html-output-code">
                <pre>{section.code}</pre>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="rocard-container">
          <div className="section-title">
            <h2>CSS Necessario</h2>
            <p>Aggiungi questo CSS personalizzato nelle impostazioni del tema Elementor.</p>
          </div>
          <div className="html-output-container">
            <div className="html-output-header">
              <h4>CSS Variabili e Stili Base</h4>
              <button 
                className="copy-btn" 
                id="copy-css"
                onClick={() => copyToClipboard(`:root {
  --rocard-blue: #1a3c6e;
  --rocard-blue-dark: #0f2847;
  --rocard-orange: #f57c00;
  --rocard-orange-dark: #e65100;
  --rocard-gray-600: #6c757d;
  --radius-lg: 12px;
  --radius-md: 8px;
}

/* Aggiungi gli stili dal file CSS completo */`, 'copy-css')}
              >
                Copia CSS
              </button>
            </div>
            <div className="html-output-code">
              <pre>{`:root {
  --rocard-blue: #1a3c6e;
  --rocard-blue-dark: #0f2847;
  --rocard-orange: #f57c00;
  --rocard-orange-dark: #e65100;
  --rocard-gray-600: #6c757d;
  --radius-lg: 12px;
  --radius-md: 8px;
}

/* Il CSS completo è disponibile nel file index.css */
/* Scarica e aggiungi alle impostazioni del tema */`}</pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chi-siamo" element={<ChiSiamoPage />} />
          <Route path="/vision-valori" element={<VisionValoriPage />} />
          <Route path="/nostro-modello" element={<NostroModelloPage />} />
          <Route path="/numeri-crescita" element={<NumeriCrescitaPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/lavora-con-noi" element={<LavoraConNoiPage />} />
          <Route path="/contatti-aziendali" element={<ContattiAziendaliPage />} />
          <Route path="/html-output" element={<HTMLOutputPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
App;
