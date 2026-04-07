import { useState } from 'react'
import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'

const products = [
  { id: 1, cat: 'flagship', img: 'images/product-siepan.png', badge: 'Flagship', title: 'SIEPAN ELITE Switchboard', specs: [['fa-bolt','Up to 4000A'],['fa-shield-alt','50kA (1 sec)'],['fa-lock','IP43'],['fa-layer-group','Form 4b']], desc: 'Siemens ACB 3WJ, MCCB 3VJ. TTA compliant per IEC 61439. Premium build quality.' },
  { id: 2, cat: 'flagship', img: 'images/product-cpri.png', badge: 'CPRI Tested', title: 'CPRI Panel', specs: [['fa-bolt','Up to 6000A'],['fa-shield-alt','70kA (1 sec)'],['fa-lock','IP42–IP65']], desc: 'Aluminium/Copper busbar. Compatible with Siemens, Schneider, ABB, and Legrand components.' },
  { id: 3, cat: 'distribution', img: 'images/product-pcc.png', badge: 'Distribution', title: 'Power Control Centre (PCC)', specs: [['fa-bolt','High Capacity'],['fa-shield-alt','Industrial Grade']], desc: 'Centralized power control and distribution for industrial plants and large commercial installations.' },
  { id: 4, cat: 'distribution', img: 'images/product-mcc.png', badge: 'Distribution', title: 'Motor Control Centre (MCC)', specs: [['fa-bolt','Multi-Motor'],['fa-cogs','Drawout Type']], desc: 'Efficient motor starting, protection, and control with modular drawout compartments.' },
  { id: 5, cat: 'distribution', img: 'images/product-apfc.png', badge: 'Power Quality', title: 'APFC Panel', specs: [['fa-bolt','135–300 KVAR'],['fa-layer-group','Compartmentalized']], desc: 'Automatic power factor correction. Available in compartmentalized and non-compartmentalized variants.' },
  { id: 6, cat: 'distribution', img: 'images/product-pcc.png', badge: 'Heavy Duty', title: 'Main MV Panel', specs: [['fa-bolt','2000A'],['fa-industry','Industrial']], desc: 'Main medium voltage panel for large-scale industrial installations requiring robust power distribution.' },
  { id: 7, cat: 'distribution', img: 'images/product-cpri.png', badge: 'Switchover', title: 'Main ATS Panel', specs: [['fa-bolt','630A'],['fa-sync-alt','Auto Transfer']], desc: 'Automatic transfer switch panel ensuring seamless power changeover between primary and backup sources.' },
  { id: 8, cat: 'distribution', img: 'images/product-siepan.png', badge: 'Main Board', title: 'MSB Panel', specs: [['fa-bolt','800A'],['fa-building','Commercial']], desc: 'Main switchboard panel for large commercial and industrial energy distribution networks.' },
  { id: 9, cat: 'distribution', img: 'images/product-mcc.png', badge: 'Sub DB', title: 'Sub Distribution Board', specs: [['fa-bolt','630A'],['fa-sitemap','Sub-Level']], desc: 'Floor-level and zone-level power distribution for buildings and large commercial complexes.' },
  { id: 10, cat: 'distribution', img: 'images/product-apfc.png', badge: 'Wall Mount', title: 'Wall Mounted TPN DB', specs: [['fa-bolt','100A'],['fa-border-all','Compact']], desc: 'Compact three-phase neutral distribution board for smaller branch circuits and lighting circuits.' },
  { id: 11, cat: 'distribution', img: 'images/product-cpri.png', badge: 'Protection', title: 'SFU Enclosure', specs: [['fa-bolt','160A / 250A'],['fa-box','Enclosed']], desc: 'Switch fuse unit enclosures for isolating and protecting feeder circuits safely.' },
]

const advancedSpecs = [
  ['fa-microchip','VFD Panels'],['fa-robot','PLC Panels'],['fa-sync-alt','AMF Panels'],
  ['fa-random','Auto Sync Panels'],['fa-arrows-alt-v','Rising Mains'],['fa-grip-lines','Bus Ducts'],
  ['fa-wave-square','Harmonic Filters'],['fa-project-diagram','SVG / Hybrid Panels'],
]

export default function Products() {
  const [filter, setFilter] = useState('all')
  useScrollAnimation()
  const visible = filter === 'all' ? products : products.filter(p => p.cat === filter)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our <span className="text-gradient">Products</span></h1>
          <p>Complete range of electrical panels designed for performance, safety, and reliability.</p>
          <div className="breadcrumb"><Link to="/">Home</Link> / Products</div>
        </div>
      </section>

      <section className="section products-page-section" id="products">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Our Products</span>
            <h2>Engineered Power <span className="text-gradient">Solutions</span></h2>
            <div className="section-line"></div>
            <p className="section-desc" style={{ color: 'var(--gray-500)' }}>Complete range of electrical panels designed for performance, safety, and reliability.</p>
          </div>

          <div className="product-filter animate-on-scroll">
            {[['all','All Products'],['flagship','Flagship'],['distribution','Distribution'],['advanced','Advanced']].map(([val, label]) => (
              <button key={val} className={`filter-btn-enhanced${filter === val ? ' active' : ''}`} onClick={() => setFilter(val)}>{label}</button>
            ))}
          </div>

          <div className="product-grid">
            {(filter === 'all' || filter !== 'advanced') && visible.map(p => (
              <div className="product-card-enhanced animate-on-scroll" key={p.id}>
                <div className="product-img-wrap">
                  <img src={p.img} alt={p.title} loading="lazy" />
                  <span className="product-badge">{p.badge}</span>
                </div>
                <div className="product-info">
                  <h3>{p.title}</h3>
                  <div className="product-specs">
                    {p.specs.map(([icon, label]) => (
                      <span key={label}><i className={`fas ${icon}`}></i> {label}</span>
                    ))}
                  </div>
                  <p>{p.desc}</p>
                  <Link to="/contact" className="btn btn-sm">Enquire Now</Link>
                </div>
              </div>
            ))}
            {(filter === 'all' || filter === 'advanced') && (
              <div className="product-card-enhanced animate-on-scroll" style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: '1fr 1.5fr' }}>
                <div className="product-img-wrap" style={{ minHeight: 280 }}>
                  <img src="images/product-siepan.png" alt="Advanced Panels" loading="lazy" />
                  <span className="product-badge accent">Advanced Solutions</span>
                </div>
                <div className="product-info">
                  <h3>Advanced Panel Solutions</h3>
                  <div className="product-specs">
                    {advancedSpecs.map(([icon, label]) => (
                      <span key={label}><i className={`fas ${icon}`}></i> {label}</span>
                    ))}
                  </div>
                  <p>Cutting-edge power management solutions including VFDs, PLCs, auto synchronization, harmonic filters, and bus duct systems for modern industrial applications.</p>
                  <Link to="/contact" className="btn btn-sm">Enquire Now</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section industries-page-section" id="industries">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Industries</span>
            <h2>Sectors We <span className="text-gradient">Serve</span></h2>
            <div className="section-line"></div>
          </div>
          <div className="industry-grid">
            {[
              ['fa-industry','Industrial Plants & Factories','Heavy-duty power panels for manufacturing and processing plants.'],
              ['fa-building','Commercial Buildings','Reliable distribution boards for offices, malls, and commercial spaces.'],
              ['fa-hospital','Hospitals & Healthcare','Mission-critical power solutions for healthcare facilities.'],
              ['fa-server','Data Centers','High-availability power distribution for IT infrastructure.'],
              ['fa-road','Infrastructure Projects','Robust panels for metro, airports, highways, and utilities.'],
              ['fa-snowflake','Cleanrooms & Cold Storage','Specialized panels meeting stringent environmental standards.'],
            ].map(([icon, title, desc]) => (
              <div className="industry-card-dark animate-on-scroll" key={title}>
                <div className="industry-icon"><i className={`fas ${icon}`}></i></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
