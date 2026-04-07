import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'

const certs = [
  {
    icon: 'fa-award',
    title: 'Siemens SIEPAN ELITE',
    content: <p>Technology Partner Certificate — authorized manufacturing partner for Siemens SIEPAN switchboard systems.</p>,
    badge: 'Partner Certified',
  },
  {
    icon: 'fa-flask',
    title: 'CPRI Test Report',
    content: (
      <ul className="cert-specs">
        <li><strong>Voltage:</strong> 415V</li>
        <li><strong>Rated Current:</strong> 6000A</li>
        <li><strong>Short Circuit:</strong> 70kA</li>
        <li><strong>Standard:</strong> IEC 61439-1 &amp; 2</li>
      </ul>
    ),
    badge: 'Lab Tested',
  },
  {
    icon: 'fa-certificate',
    title: 'Standards Compliance',
    content: (
      <ul className="cert-specs">
        <li>IEC 61439-1 &amp; 2</li>
        <li>TTA (Totally Tested Assembly)</li>
        <li>PTA (Partially Tested Assembly)</li>
      </ul>
    ),
    badge: 'Compliant',
  },
  {
    icon: 'fa-cogs',
    title: 'Manufacturing Capability',
    content: (
      <ul className="cert-specs">
        <li>Nam Sung Busbar Processing Machine</li>
        <li>Aluminium Busbars</li>
        <li>Copper Busbars</li>
      </ul>
    ),
    badge: 'In-House',
  },
]

export default function Certifications() {
  useScrollAnimation()
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Certifications &amp; <span className="text-gradient">Compliance</span></h1>
          <p>Industry-recognized credentials validating our commitment to quality and safety.</p>
          <div className="breadcrumb"><Link to="/">Home</Link> / Certifications</div>
        </div>
      </section>

      <section className="section cert-page-section" id="certifications">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag" style={{ background: 'rgba(0,169,157,0.12)', borderColor: 'rgba(0,169,157,0.3)', color: 'var(--teal)' }}>Credentials</span>
            <h2 style={{ color: '#fff' }}>Our <span className="text-gradient">Certifications</span></h2>
            <div className="section-line"></div>
          </div>
          <div className="cert-grid">
            {certs.map(({ title, content, badge }) => (
              <div className="cert-card-enhanced animate-on-scroll" key={title}>
                <h3>{title}</h3>
                {content}
                <span className="cert-badge">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
