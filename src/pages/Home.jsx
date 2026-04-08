import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'

export default function Home() {
  useScrollAnimation()

  const handleSubmit = (e) => {
    e.preventDefault()
    const fd = new FormData(e.target)
    const msg = encodeURIComponent(
      `*New Enquiry — Vajra Panels™*\n\n*Name:* ${fd.get('name')}\n*Company:* ${fd.get('company') || 'Not specified'}\n*Phone:* ${fd.get('phone')}\n*Product:* ${fd.get('product') || 'General Enquiry'}\n*Message:* ${fd.get('message') || 'No additional message'}`
    )
    window.open(`https://wa.me/917418762221?text=${msg}`, '_blank')
    e.target.reset()
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero" id="home">
        <div className="hero-bg">
          <img src="images/hero-banner.png" alt="Industrial electrical panels" className="hero-img" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-badges animate-on-scroll">
            <span className="badge">Siemens SIEPAN ELITE Partner</span>
            <span className="badge">CPRI Tested</span>
            <span className="badge">IEC 61439-1 &amp; 2</span>
          </div>
          <h1 className="hero-title animate-on-scroll">Powering Industry<br />with <span className="text-gradient">Precision</span></h1>
          <p className="hero-subtitle animate-on-scroll">Advanced electrical panel manufacturing solutions for industrial, commercial, and infrastructure sectors.</p>
          <div className="hero-tagline animate-on-scroll">"Scaling Newer Heights"</div>
          <div className="hero-cta animate-on-scroll">
            <Link to="/products" className="btn btn-primary">Explore Products</Link>
            <Link to="/contact" className="btn btn-outline">Enquire Now</Link>
          </div>
          <div className="hero-brands animate-on-scroll">
            <div className="hero-brand-item">
              <img src="/images/vajra-panels-logo.png" alt="Vajra Panels Logo" className="brand-logo-img-lg" />
              <div><small>Precision Engineered</small></div>
            </div>
            <div className="hero-brand-divider"></div>
            <div className="hero-brand-item">
              <img src="/images/neo-heights-logo.png" alt="Neo Heights Logo" className="brand-logo-img-lg" />
              <div><strong>Neo Heights Builders</strong><small>&amp; Promoters Pvt. Ltd.</small></div>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Scroll Down</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </section>

      {/* ── ABOUT ── matches design exactly */}
      <section className="section about-page-section" id="about">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">About Us</span>
            <h2>Engineering Excellence in<br /><span className="text-gradient">Power Distribution</span></h2>
            <div className="section-line"></div>
          </div>
          <div className="about-redesign-grid">
            <div className="about-redesign-left animate-on-scroll">
              <p className="about-lead">
                Neo Heights Builders and Promoters Pvt. Ltd. is a <strong>Bangalore-based engineering company</strong> specializing in advanced electrical panel manufacturing under the brand <strong>Vajra Panels™</strong>.
              </p>
              <p className="about-sub">
                Vajra Panels are engineered for performance, safety and compliance, and capitalizes on the superior test performances, all-tested sections panelists.
              </p>
              <div className="about-pill-tags">
                <span>Commercial</span>
                <span>Industrial</span>
                <span>Infrastructure</span>
              </div>
            </div>
            <div className="about-redesign-right animate-on-scroll">
              {[
                { title: 'Siemens SIEPAN ELITE', sub: 'Authorized Technology Partner' },
                { title: 'CPRI Test Report — 70kA', sub: 'Authorized up to 6600A at 415V' },
                { title: 'IEC 61439-1 & 2', sub: 'Indicated country to IEC standards' },
              ].map(({ title, sub }) => (
                <div className="about-feature-row" key={title}>
                  <div className="about-feature-text">
                    <h4>{title}</h4>
                    <p>{sub}</p>
                  </div>
                </div>
              ))}
              <div className="about-cta-row">
                <Link to="/products" className="btn btn-primary btn-sm">Explore Products</Link>
                <Link to="/contact" className="btn btn-outline btn-sm">Enquire Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── navy gradient (already dark) */}
      <section className="section cert-page-section" id="certifications">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag" style={{ background:'rgba(0,169,157,0.12)', borderColor:'rgba(0,169,157,0.3)', color:'var(--teal)' }}>Credentials</span>
            <h2 style={{ color:'#fff' }}>Certifications &amp; <span className="text-gradient">Compliance</span></h2>
            <div className="section-line"></div>
          </div>
          <div className="cert-grid">
            <div className="cert-card-enhanced animate-on-scroll">
              <h3>Siemens SIEPAN ELITE</h3>
              <p>Technology Partner Certificate — authorized manufacturing partner for Siemens SIEPAN switchboard systems.</p>
              <span className="cert-badge">Partner Certified</span>
            </div>
            <div className="cert-card-enhanced animate-on-scroll">
              <h3>CPRI Test Report</h3>
              <ul className="cert-specs">
                <li><strong>Voltage:</strong> 415V</li>
                <li><strong>Rated Current:</strong> 6000A</li>
                <li><strong>Short Circuit:</strong> 70kA</li>
                <li><strong>Standard:</strong> IEC 61439-1 &amp; 2</li>
              </ul>
              <span className="cert-badge">Lab Tested</span>
            </div>
            <div className="cert-card-enhanced animate-on-scroll">
              <h3>Standards Compliance</h3>
              <ul className="cert-specs">
                <li>IEC 61439-1 &amp; 2</li>
                <li>TTA (Totally Tested Assembly)</li>
                <li>PTA (Partially Tested Assembly)</li>
              </ul>
              <span className="cert-badge">Compliant</span>
            </div>
            <div className="cert-card-enhanced animate-on-scroll">
              <h3>Manufacturing Capability</h3>
              <ul className="cert-specs">
                <li>Nam Sung Busbar Processing Machine</li>
                <li>Aluminium Busbars</li>
                <li>Copper Busbars</li>
              </ul>
              <span className="cert-badge">In-House</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS PREVIEW ── light gradient */}
      <section className="section products-page-section" id="products">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Our Products</span>
            <h2>Engineered Power <span className="text-gradient">Solutions</span></h2>
            <div className="section-line"></div>
            <p className="section-desc">Complete range of electrical panels designed for performance, safety, and reliability.</p>
          </div>
          <div className="product-grid">
            {[
              { img:'images/product-siepan.png', badge:'Flagship', title:'SIEPAN ELITE Switchboard', specs:[['fa-bolt','Up to 4000A'],['fa-shield-alt','50kA (1 sec)'],['fa-lock','IP43']], desc:'Siemens ACB 3WJ, MCCB 3VJ. TTA compliant per IEC 61439. Premium build quality.' },
              { img:'images/product-cpri.png', badge:'CPRI Tested', title:'CPRI Panel', specs:[['fa-bolt','Up to 6000A'],['fa-shield-alt','70kA (1 sec)'],['fa-lock','IP42–IP65']], desc:'Aluminium/Copper busbar. Compatible with Siemens, Schneider, ABB, and Legrand components.' },
              { img:'images/product-pcc.png', badge:'Distribution', title:'Power Control Centre (PCC)', specs:[['fa-bolt','High Capacity'],['fa-shield-alt','Industrial Grade']], desc:'Centralized power control and distribution for industrial plants and large commercial installations.' },
            ].map(({ img, badge, title, specs, desc }) => (
              <div className="product-card-enhanced animate-on-scroll" key={title}>
                <div className="product-img-wrap">
                  <img src={img} alt={title} loading="lazy" />
                  <span className="product-badge">{badge}</span>
                </div>
                <div className="product-info">
                  <h3>{title}</h3>
                  <div className="product-specs">
                    {specs.map(([icon, label]) => <span key={label}><i className={`fas ${icon}`}></i> {label}</span>)}
                  </div>
                  <p>{desc}</p>
                  <Link to="/contact" className="btn btn-sm">Enquire Now</Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign:'center', marginTop:40 }}>
            <Link to="/products" className="btn btn-primary">View All Products</Link>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── dark gradient */}
      <section className="section industries-page-section" id="industries">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Industries</span>
            <h2>Sectors We <span className="text-gradient">Serve</span></h2>
            <div className="section-line"></div>
          </div>
          <div className="industry-grid">
            {[
              ['Industrial Plants & Factories','Heavy-duty power panels for manufacturing and processing plants.', '/images/Industrial power panel room details.png'],
              ['Commercial Buildings','Reliable distribution boards for offices, malls, and commercial spaces.', null],
              ['Hospitals & Healthcare','Mission-critical power solutions for healthcare facilities.', null],
              ['Data Centers','High-availability power distribution for IT infrastructure.', null],
              ['Infrastructure Projects','Robust panels for metro, airports, highways, and utilities.', null],
              ['Cleanrooms & Cold Storage','Specialized panels meeting stringent environmental standards.', null],
            ].map(([title, desc, img]) => (
              <div className="industry-card-dark animate-on-scroll" key={title}>
                {img && <img src={img} alt={title} className="industry-card-img" loading="lazy" />}
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── dark gradient */}
      <section className="section projects-page-section" id="gallery">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag" style={{ background:'rgba(0,169,157,0.12)', borderColor:'rgba(0,169,157,0.3)', color:'var(--teal)' }}>Portfolio</span>
            <h2 style={{ color:'#fff' }}>Our Work &amp; <span className="text-gradient">Projects</span></h2>
            <div className="section-line"></div>
          </div>
          <div className="gallery-grid">
            {[
              { src:'images/product-siepan.png', title:'SIEPAN ELITE', sub:'Siemens Technology' },
              { src:'images/product-cpri.png', title:'CPRI Panel', sub:'70kA Rated' },
              { src:'images/product-pcc.png', title:'PCC Panel', sub:'Power Control Centre' },
              { src:'images/product-mcc.png', title:'MCC Panel', sub:'Motor Control Centre' },
              { src:'images/product-apfc.png', title:'APFC Panel', sub:'Power Factor Correction' },
              { src:'images/hero-banner.png', title:'Manufacturing', sub:'In-House Fabrication' },
            ].map(({ src, title, sub }) => (
              <div className="gallery-card animate-on-scroll" key={title}>
                <img src={src} alt={title} loading="lazy" />
                <div className="gallery-card-info">
                  <h4>{title}</h4>
                  <p>{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── deep navy gradient */}
      <section className="section why-us-page" id="why-us">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Our Strength</span>
            <h2>Why Choose <span className="text-gradient">Vajra Panels</span></h2>
            <div className="section-line"></div>
          </div>
          <div className="why-grid">
            {[
              ['01','Siemens Technology Partner','Authorized SIEPAN ELITE manufacturing partner with access to Siemens switchgear technology.'],
              ['02','CPRI Certified — 70kA','Panels tested and certified by CPRI for short-circuit withstand up to 70kA at 6000A.'],
              ['03','IEC 61439 Compliant','Full compliance with international standards IEC 61439-1 & 2 for low-voltage switchgear.'],
              ['04','Custom-Built Solutions','Every panel is engineered to meet exact project specifications and site conditions.'],
              ['05','Al & Cu Busbars','Both aluminium and copper busbar options with precise CNC processing on Nam Sung machines.'],
              ['06','In-House Fabrication','Complete in-house manufacturing from raw material to finished product ensures quality at every step.'],
              ['07','High Safety Standards','Rigorous testing, IP-rated enclosures, and fault-tolerant designs for maximum operator safety.'],
              ['08','Modern Aesthetic Design','Clean, contemporary panel designs that look as good as they perform in any installation.'],
            ].map(([n, t, d]) => (
              <div className="why-card-enhanced animate-on-scroll" key={n}>
                <div className="why-number">{n}</div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── dark gradient */}
      <section className="section contact-page-section" id="contact">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag" style={{ background:'rgba(0,169,157,0.12)', borderColor:'rgba(0,169,157,0.3)', color:'var(--teal)' }}>Get in Touch</span>
            <h2 style={{ color:'#fff' }}>Contact &amp; <span className="text-gradient">Enquiry</span></h2>
            <div className="section-line"></div>
          </div>
          <div className="contact-grid">
            <div className="animate-on-scroll">
              {[
                { icon:'fa-user-tie', label:'Contact Person', val:'Mr. Saravanan', href:null },
                { icon:'fa-phone-alt', label:'Phone', val:'+91 74187 62221', href:'tel:+917418762221' },
                { icon:'fa-envelope', label:'Email', val:'panels@neoheights.com', href:'mailto:panels@neoheights.com' },
                { icon:'fa-globe', label:'Website', val:'www.neoheights.com', href:'http://www.neoheights.com' },
              ].map(({ icon, label, val, href }) => (
                <div className="contact-card-enhanced" key={label}>
                  <div className="contact-icon"><i className={`fas ${icon}`}></i></div>
                  <div>
                    <h4>{label}</h4>
                    <p>{href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{val}</a> : val}</p>
                  </div>
                </div>
              ))}
              <div className="contact-map-enhanced">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.56658258646!2d77.46612702968753!3d12.954517009388572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%" height="240" style={{ border:0 }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="Bangalore Location"
                ></iframe>
              </div>
            </div>
            <div className="contact-form-enhanced animate-on-scroll">
              <form onSubmit={handleSubmit}>
                <h3>Send an Enquiry</h3>
                <div className="form-group">
                  <label htmlFor="h-name">Name *</label>
                  <input type="text" id="h-name" name="name" placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="h-company">Company</label>
                  <input type="text" id="h-company" name="company" placeholder="Your company name" />
                </div>
                <div className="form-group">
                  <label htmlFor="h-phone">Phone *</label>
                  <input type="tel" id="h-phone" name="phone" placeholder="+91 XXXXX XXXXX" required />
                </div>
                <div className="form-group">
                  <label htmlFor="h-product">Product Interest</label>
                  <select id="h-product" name="product">
                    <option value="">Select a product</option>
                    <option>SIEPAN ELITE Switchboard</option>
                    <option>CPRI Panel</option>
                    <option>PCC - Power Control Centre</option>
                    <option>MCC - Motor Control Centre</option>
                    <option>APFC Panel</option>
                    <option>Other / Custom</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="h-message">Message</label>
                  <textarea id="h-message" name="message" rows="3" placeholder="Tell us about your requirements..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-full">
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
