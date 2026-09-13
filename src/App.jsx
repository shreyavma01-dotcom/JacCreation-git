import { useState, useEffect } from 'react';
import './App.css';

// Sections tracked for the navbar active state (single-page scroll site).
const VISIBLE_SECTION_IDS = ['home', 'projects', 'about', 'contact'];

export default function App() {
  const [navDark, setNavDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setNavDark(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  // Single-page site: highlight the navbar item whose section is in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // A thin horizontal band around the viewport centre decides which
      // section is "current"; gap sections (e.g. the brand statement) simply
      // keep the last active item instead of clearing it.
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    VISIBLE_SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  // In-page smooth scroll helper (used by the hero scroll indicator).
  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Projects', id: 'projects' },
    { label: 'About Us', id: 'about' },
    { label: 'Contact Us', id: 'contact' }
  ];

  return (
    <>
      {/* Navigation */}
      <nav className={navDark ? 'dark' : 'light'}>
        <div className="nav-content">
          <a
            href="#home"
            className="logo"
            aria-label="JAC Creation - Back to home section"
            onClick={() => setMenuOpen(false)}
          >
            <img src="/logo.png" alt="JAC Creation" />
            <h1>JAC Creation</h1>
          </a>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={activeSection === link.id ? 'active' : undefined}
                  aria-current={activeSection === link.id ? 'true' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2400&h=1350&fit=crop&auto=format&q=80"
          alt="Modern architecture with natural light"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-headline">
            <span className="primary">Welcome Home.</span>
            <span className="secondary">To The Extraordinary.</span>
          </div>
        </div>
        <div
          className="hero-scroll"
          role="button"
          tabIndex={0}
          aria-label="Scroll to the next section"
          onClick={() => scrollToId('brand-statement')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              scrollToId('brand-statement');
            }
          }}
        >
          <span className="hero-scroll-text">Scroll for more</span>
          <span className="hero-scroll-indicator" aria-hidden="true">
            <span className="hero-scroll-line"></span>
            <span className="hero-scroll-arrow"></span>
          </span>
        </div>
      </section>

      {/* Brand Statement Section */}
      <section id="brand-statement" className="brand-statement">
        <div className="brand-statement-content">
          <h2>Architecture as a Quiet Act</h2>
          <p className="brand-statement-byline">
            We believe the most powerful architecture speaks softly. It enhances life without demanding attention, creates beauty through restraint, and leaves a legacy of meaningful places where human experiences unfold.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="about" className="philosophy">
        <div className="philosophy-content">
          <div className="philosophy-text">
            <div className="eyebrow">Philosophy</div>
            <h2>We Design Experiences, Not Just Structures.</h2>
            <p>
              Our architecture is rooted in understanding how spaces make people feel. We create environments where every detail serves the human experience, where light, material, and spatial flow combine to create moments of meaning and connection.
            </p>
          </div>
          <div className="philosophy-image">
            <img
              src="/Interior%20architecture%20space%20with%20warm%20light%20image.png"
              alt="Interior architectural space with warm lighting"
            />
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section id="framework" className="framework">
        <div className="framework-content">
          <div className="framework-header">
            <div className="eyebrow">The Framework</div>
            <h2 className="framework-title">Our Design Methodology</h2>
          </div>

          <div className="framework-text">
            <p className="framework-primary">
              Our approach, driven by creative ideas and grounded in evidence-based research, unveils opportunities often unseen at a project's inception. This methodology ensures we reach positive, transformative outcomes.
            </p>
            <div className="framework-supporting">
              <p>
                Our portfolio of city-shaping master plans and extensive urban projects showcases our ability to harness opportunities within the context. We unlock each site's full potential.
              </p>
              <p>
                Looking widely, we discern opportunities, patterns, and connections. This results in improved project quality without compromising cost-effectiveness.
              </p>
            </div>
          </div>

          <div className="framework-scale">
            <div className="scale-item">
              <div className="scale-item-label">Neighbourhood</div>
            </div>
            <div className="scale-connector"></div>
            <div className="scale-item">
              <div className="scale-item-label">City</div>
            </div>
            <div className="scale-connector"></div>
            <div className="scale-item">
              <div className="scale-item-label">Region</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section id="projects" className="projects">
        <div className="projects-container">
          <div className="projects-header">
            <div className="eyebrow">Selected Work</div>
            <h2>Our Portfolio</h2>
          </div>

          <div className="projects-grid">
            {[
              { name: 'Riverside Residence', type: 'Residential' },
              { name: 'Urban Plaza', type: 'Public Space' },
              { name: 'Heritage Hotel', type: 'Hospitality' },
              { name: 'Cultural Pavilion', type: 'Cultural' },
              { name: 'Waterfront Master Plan', type: 'Urban' },
              { name: 'Mountain Retreat', type: 'Residential' }
            ].map((project, index) => (
              <div key={index} className="project-card">
                <img
                  className="project-image"
                  src={[
                    '/Riverside%20Residence.jpg',
                    '/Urban%20Plaza.jpg',
                    '/Heritage%20Hotel.jpg',
                    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=800&fit=crop',
                    '/Waterfront%20Master%20Plan%20.jpg',
                    '/Mountain%20Retreat.jpg'
                  ][index]}
                  alt={project.name}
                />
                <div className="project-overlay">
                  <div className="project-name">{project.name}</div>
                  <div className="project-type">{project.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured">
        <div className="featured-container">
          <div className="featured-header">
            <div className="eyebrow">Featured Projects</div>
            <h2>Transformative Spaces</h2>
          </div>

          <div className="featured-project">
            <div className="featured-image">
              <img
                src="/Riverside%20Residence.jpg"
                alt="Riverside Residence project"
              />
            </div>
            <div className="featured-text">
              <h3>Riverside Residence</h3>
              <p>
                A contemporary family home that seamlessly integrates with its natural landscape. The design prioritizes light, materiality, and the relationship between interior and outdoor living spaces.
              </p>
              <div className="project-tags">
                <span className="project-tag">Residential</span>
                <span className="project-tag">Modern</span>
                <span className="project-tag">Landscape Integration</span>
              </div>
            </div>
          </div>

          <div className="featured-project">
            <div className="featured-image">
              <img
                src="/Urban%20Plaza.jpg"
                alt="Urban Plaza project"
              />
            </div>
            <div className="featured-text">
              <h3>Central Urban Plaza</h3>
              <p>
                A vibrant public space designed to foster community connection and cultural exchange. The plaza features carefully considered materiality, flexible spaces, and a strong connection to the surrounding urban fabric.
              </p>
              <div className="project-tags">
                <span className="project-tag">Public Space</span>
                <span className="project-tag">Urban Design</span>
                <span className="project-tag">Community</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta-section">
        <div className="cta-content">
          <h2>Start Your Project</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'rgba(255, 255, 255, 0.9)' }}>
            Let's create something extraordinary together
          </p>
          <button className="cta-button">Get in Touch</button>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h4>Studio</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#approach">Our Approach</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Work</h4>
            <ul>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#case-studies">Case Studies</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Practice</h4>
            <ul>
              <li><a href="#residential">Residential</a></li>
              <li><a href="#hospitality">Hospitality</a></li>
              <li><a href="#urban">Urban</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href="mailto:hello@jaccreation.com">hello@jaccreation.com</a></li>
              <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
              <li><a href="#address">Studio Location</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 JAC Creation. All rights reserved.</p>
          <div className="footer-social">
            <a
              href="#instagram"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </a>
            <a
              href="#linkedin"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </a>
            <a
              href="#twitter"
              target="_blank"
              rel="noopener noreferrer"
              title="X"
              aria-label="X"
            >
              <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
