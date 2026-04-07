import { Link } from 'react-router-dom'

export default function Footer() {

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand-logo footer-logo">
              <img src="/images/vajra-panels-logo.png" alt="Vajra Panels Logo" className="brand-logo-img" />
            </div>
            <p className="footer-tagline">"Powering a Greener Future Together"</p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/arul-group-/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/certifications">Certifications</Link></li>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Products</h4>
            <ul>
              <li><Link to="/products">SIEPAN ELITE</Link></li>
              <li><Link to="/products">CPRI Panels</Link></li>
              <li><Link to="/products">PCC Panels</Link></li>
              <li><Link to="/products">MCC Panels</Link></li>
              <li><Link to="/products">APFC Panels</Link></li>
              <li><Link to="/products">Advanced Solutions</Link></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p><i className="fas fa-user"></i> Mr. Saravanan</p>
            <p><i className="fas fa-phone"></i> <a href="tel:+917418762221">+91 74187 62221</a></p>
            <p><i className="fas fa-envelope"></i> <a href="mailto:panels@neoheights.com">panels@neoheights.com</a></p>
            <p><i className="fas fa-map-marker-alt"></i> Bangalore, Karnataka, India</p>
          </div>
        </div>

        <div className="footer-certs">
          <span><i className="fas fa-award"></i> Siemens SIEPAN ELITE</span>
          <span><i className="fas fa-flask"></i> CPRI Tested</span>
          <span><i className="fas fa-certificate"></i> IEC 61439-1 &amp; 2</span>
          <span><i className="fas fa-check-circle"></i> TTA Compliant</span>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Neo Heights Builders and Promoters Pvt. Ltd. All rights reserved.</p>
          <p>Vajra Panels™ is a registered trademark.</p>
        </div>
      </div>
    </footer>
  )
}
