import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'

export default function About() {
  useScrollAnimation()
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About <span className="text-gradient">Vajra Panels™</span></h1>
          <p>Engineering excellence in power distribution since our founding in Bangalore.</p>
          <div className="breadcrumb"><Link to="/">Home</Link> / About Us</div>
        </div>
      </section>

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
            </div>
          </div>
        </div>
      </section>

      <section className="section why-us-page" id="why-us">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Our Strength</span>
            <h2>Why Choose<br /><span className="text-gradient">Vajra Panels</span></h2>
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
    </>
  )
}
