import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'

const gallery = [
  { src: 'images/product-siepan.png', title: 'SIEPAN ELITE', sub: 'Siemens Technology' },
  { src: 'images/product-cpri.png', title: 'CPRI Panel', sub: '70kA Rated' },
  { src: 'images/product-pcc.png', title: 'PCC Panel', sub: 'Power Control Centre' },
  { src: 'images/product-mcc.png', title: 'MCC Panel', sub: 'Motor Control Centre' },
  { src: 'images/product-apfc.png', title: 'APFC Panel', sub: 'Power Factor Correction' },
  { src: 'images/hero-banner.png', title: 'Manufacturing', sub: 'In-House Fabrication' },
]

export default function Projects() {
  useScrollAnimation()
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our Work &amp; <span className="text-gradient">Projects</span></h1>
          <p>A showcase of our precision-engineered electrical panel installations across industries.</p>
          <div className="breadcrumb"><Link to="/">Home</Link> / Projects</div>
        </div>
      </section>

      <section className="section projects-page-section" id="gallery">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag" style={{ background: 'rgba(0,169,157,0.12)', borderColor: 'rgba(0,169,157,0.3)', color: 'var(--teal)' }}>Portfolio</span>
            <h2 style={{ color: '#fff' }}>Project <span className="text-gradient">Gallery</span></h2>
            <div className="section-line"></div>
            <p style={{ marginTop: 16, color: 'rgba(255,255,255,0.5)', fontSize: '1.05rem' }}>Precision-engineered panels delivered across industries.</p>
          </div>
          <div className="gallery-grid">
            {gallery.map(({ src, title, sub }) => (
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
    </>
  )
}
