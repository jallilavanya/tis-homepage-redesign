import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Check, ChevronDown } from 'lucide-react'
import Header from './components/Header'
import About from './components/sections/About'
import Academics from './components/sections/Academics'
import Admissions from './components/sections/Admissions'
import Campus from './components/sections/Campus'
import Footer from './components/sections/Footer'
import Hero from './components/sections/Hero'
import Testimonials from './components/sections/Testimonials'
import { Cursor, Modal, ProgressBar } from './components/ui'

function InquiryForm({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false)
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) return <div className="form-success"><span className="success-mark"><Check size={23} /></span><span className="eyebrow">Thank you</span><h2>Let’s take it<br /><em>from here.</em></h2><p>Your enquiry is ready. Our admissions team will be in touch soon.</p><button className="button button-dark" onClick={onClose}>Back to Tulas <ArrowUpRight size={15} /></button></div>

  return <><span className="eyebrow">A good place to begin</span><h2 className="inquiry-title">Let’s talk<br /><em>possibility.</em></h2><p className="inquiry-intro">Tell us a little about your family and our admissions team will be happy to help.</p>
    <form className="inquiry-form" onSubmit={submit}>
      <label>Parent / guardian name<input name="name" autoComplete="name" placeholder="Your name" required /></label>
      <div className="form-row"><label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label><label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="+91" required /></label></div>
      <label>Grade of interest<span className="select-wrap"><select name="grade" defaultValue="" required><option value="" disabled>Select a grade</option><option>Primary school</option><option>Middle school</option><option>Senior school</option></select><ChevronDown size={16} /></span></label>
      <label>Your message <span className="optional-label">Optional</span><textarea name="message" placeholder="What would you like to know?" rows={3} /></label>
      <button className="button button-gold inquiry-submit" type="submit">Send an enquiry <ArrowUpRight size={16} /></button>
      <small className="form-privacy">Your details will only be used to respond to your enquiry.</small>
    </form>
  </>
}

export default function App() {
  const [inquiryOpen, setInquiryOpen] = useState(false)
  const [tourOpen, setTourOpen] = useState(false)
  const openInquiry = () => setInquiryOpen(true)

  return <>
    <ProgressBar />
    <Cursor />
    <Header onInquire={openInquiry} />
    <main>
      <Hero onTour={() => setTourOpen(true)} />
      <About />
      <Academics />
      <Campus open={tourOpen} onClose={() => setTourOpen(false)} onOpen={() => setTourOpen(true)} />
      <Admissions onInquire={openInquiry} />
      <Testimonials />
    </main>
    <Footer />
    <Modal open={inquiryOpen} onClose={() => setInquiryOpen(false)} title="Admissions enquiry"><InquiryForm onClose={() => setInquiryOpen(false)} /></Modal>
  </>
}