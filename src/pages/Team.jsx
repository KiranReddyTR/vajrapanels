import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'

export default function Team() {
  useScrollAnimation()

  const experts = [
    {
      name: "Mr. Arul Vajravel",
      role: "MD - Arul Group",
      image: "/images/team-arul.png"
    },
    {
      name: "Mr. Thirumalesh",
      role: "CHRO - ARUL GROUP",
      image: "/images/team-thirumalesh.png"
    }
  ]

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our <span className="text-gradient">Leadership</span></h1>
          <p>Meet the team behind Vajra Panels' engineering excellence.</p>
          <div className="breadcrumb"><Link to="/">Home</Link> / Our Team</div>
        </div>
      </section>

      <section className="legacy-section">
        <div className="container">
          <div className="legacy-grid">
            <div className="legacy-image-wrap animate-on-scroll">
              <img src="/images/legacy-heritage.png" alt="Arul Group Legacy" />
              <div className="legacy-quote-card">
                <p>"Our legacy is defined by the structures we build and the trust we earn with every client."</p>
                <span>— Arul Group Leadership</span>
              </div>
            </div>
            <div className="legacy-content animate-on-scroll">
              <div className="legacy-logo-top">
                <img src="/images/arul-group-logo.png" alt="Arul Group" className="legacy-main-logo" />
              </div>
              <h2>A Legacy Built on Trust and<br /><span className="text-gradient">Engineering Excellence</span></h2>
              <p>
                Neo Heights, part of the Arul Group, offers civil, PEB, interior, and MEP solutions focused on quality and long-term value.
              </p>
              <div className="legacy-logos">
                <div className="logo-item border-gradient">
                  <img src="/images/arul-polymers-logo.png" alt="Arul Polymers" className="legacy-brand-img" />
                </div>
                <div className="logo-item border-gradient">
                  <img src="/images/arul-rubbers-logo.png" alt="Arul Rubbers" className="legacy-brand-img" />
                </div>
                <div className="logo-item border-gradient">
                  <img src="/images/neo-studio-logo.png" alt="Neo Studio" className="legacy-brand-img" />
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary">Learn More <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="experts-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Our Team</span>
            <h2>Meet Our <span className="text-gradient">Experts</span></h2>
            <div className="section-line"></div>
            <p className="section-desc">
              At Neo Heights, we are at the forefront of industrial and commercial construction, dedicated to delivering top-notch quality while ensuring cost-efficiency. Our skilled team possesses the expertise to transform your vision into reality.
            </p>
          </div>

          <div className="team-grid">
            {experts.map((member, idx) => (
              <div className="team-card animate-on-scroll" key={idx} style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="team-img-wrap">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
                <div className="team-arrow">
                  <i className="fas fa-arrow-up"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
