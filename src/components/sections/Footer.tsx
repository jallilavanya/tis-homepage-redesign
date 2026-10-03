import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Instagram, Linkedin, Send } from 'lucide-react'

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false)
  const [email, setEmail] = useState('')
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (email.trim()) setSubscribed(true)
  }

  return <footer className="site-footer" id="contact">
    <div className="section-wrap">
      <div className="footer-top"><a className="brand footer-brand" href="#top"><span className="brand-mark"><span>T</span></span><span className="brand-wordmark"><strong>TULAS</strong><small>INTERNATIONAL SCHOOL</small></span></a><p>A school for the life<br />they’ll make their own.</p><a className="back-top" href="#top">Back to top <span>↑</span></a></div>
      <div className="footer-grid">
        <div className="footer-column"><span className="footer-label">Explore</span><a href="#about">Our story</a><a href="#learning">Learning</a><a href="#campus">Campus life</a><a href="#stories">Our community</a></div>
        <div className="footer-column"><span className="footer-label">Admissions</span><a href="#admissions">How to apply</a><a href="#admissions">Visit the campus</a><a href="#admissions">Frequently asked</a><a href="#admissions">Make an enquiry</a></div>
        <div className="footer-column footer-contact"><span className="footer-label">Find us</span><p>Dhoolkot, Selaqui<br />Dehradun, Uttarakhand<br />India 248011</p><a href="tel:+911352691000">+91 135 269 1000 <ArrowUpRight size={13} /></a><a href="mailto:admissions@tis.edu.in">admissions@tis.edu.in <ArrowUpRight size={13} /></a></div>
        <div className="footer-newsletter"><span className="footer-label">A note from Tulas</span><p>Occasional news, ideas and moments from our campus.</p><form onSubmit={submit} className="newsletter-form"><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" type="email" placeholder="Your email address" value={email} required onChange={(event) => setEmail(event.target.value)} disabled={subscribed} /><button type="submit" aria-label="Subscribe to the newsletter" disabled={subscribed}><Send size={16} /></button></form><span className="newsletter-status" aria-live="polite">{subscribed ? 'Thank you. You’re on the list.' : 'No noise. Just the occasional good thing.'}</span></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Tulas International School</span><div className="footer-legal"><a href="mailto:info@tis.edu.in?subject=Privacy%20policy">Privacy</a><a href="mailto:info@tis.edu.in?subject=Terms%20of%20use">Terms</a></div><div className="social-links"><a href="https://www.instagram.com/" aria-label="Instagram"><Instagram size={16} /></a><a href="https://www.linkedin.com/" aria-label="LinkedIn"><Linkedin size={16} /></a></div></div>
    </div>
  </footer>
}