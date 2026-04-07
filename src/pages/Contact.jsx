import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'

export default function Contact() {
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
      <section className="page-hero">
        <div className="container">
          <h1>Contact &amp; <span className="text-gradient">Enquiry</span></h1>
          <p>Get in touch with us for custom electrical panel solutions tailored to your project.</p>
          <div className="breadcrumb"><Link to="/">Home</Link> / Contact</div>
        </div>
      </section>

      <section className="section contact-page-section" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="animate-on-scroll">
              {[
                { icon: 'fa-user-tie', label: 'Contact Person', val: 'Mr. Saravanan', href: null },
                { icon: 'fa-phone-alt', label: 'Phone', val: '+91 74187 62221', href: 'tel:+917418762221' },
                { icon: 'fa-envelope', label: 'Email', val: 'panels@neoheights.com', href: 'mailto:panels@neoheights.com' },
                { icon: 'fa-globe', label: 'Website', val: 'www.neoheights.com', href: 'http://www.neoheights.com' },
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
                  width="100%" height="260" style={{ border: 0 }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="Bangalore Location"
                ></iframe>
              </div>
            </div>

            <div className="contact-form-enhanced animate-on-scroll">
              <form onSubmit={handleSubmit}>
                <h3>Send an Enquiry</h3>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input type="text" id="name" name="name" placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" placeholder="Your company name" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" required />
                </div>
                <div className="form-group">
                  <label htmlFor="product">Product Interest</label>
                  <select id="product" name="product">
                    <option value="">Select a product</option>
                    <option>SIEPAN ELITE Switchboard</option>
                    <option>CPRI Panel</option>
                    <option>PCC - Power Control Centre</option>
                    <option>MCC - Motor Control Centre</option>
                    <option>APFC Panel</option>
                    <option>Main MV Panel</option>
                    <option>Main ATS Panel</option>
                    <option>MSB Panel</option>
                    <option>Sub Distribution Board</option>
                    <option>VFD / PLC Panels</option>
                    <option>Bus Duct / Rising Mains</option>
                    <option>Other / Custom</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="4" placeholder="Tell us about your requirements..."></textarea>
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
