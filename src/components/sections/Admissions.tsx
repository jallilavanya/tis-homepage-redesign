import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { admissionSteps } from '../../data/content'
import { Button, Reveal } from '../ui'

export default function Admissions({ onInquire }: { onInquire: () => void }) {
  return <>
    <section className="admissions-section section-pad" id="admissions">
      <div className="section-wrap">
        <Reveal className="section-heading admissions-heading"><div><span className="eyebrow">Your next chapter starts here</span><h2>A clear path<br />to <em>Tulas.</em></h2></div><div className="admissions-aside"><p>Good decisions start with good conversations. We’ll make every step feel straightforward.</p><button className="text-link" onClick={onInquire}>Talk to admissions <span><ArrowUpRight size={15} /></span></button></div></Reveal>
        <div className="steps-grid">
          {admissionSteps.map((step, index) => <Reveal key={step.number} delay={index * 0.07}><article className="step-card"><span className="step-number">{step.number}</span><span className="step-connector" /><h3>{step.title}</h3><p>{step.text}</p><ArrowRight className="step-arrow" size={16} /></article></Reveal>)}
        </div>
        <Reveal className="admissions-bottom"><span>We’re here for your questions.</span><Button variant="gold" onClick={onInquire}>Make an enquiry <ArrowUpRight size={16} /></Button></Reveal>
      </div>
    </section>
    <section className="cta-section"><div className="cta-orbit cta-orbit-one" /><div className="cta-orbit cta-orbit-two" /><Reveal className="cta-content"><span className="eyebrow">A good place to begin</span><h2>Give them room<br />to <em>become.</em></h2><p>Admissions are open for the 2026–27 academic year.</p><Button variant="gold" onClick={onInquire}>Start a conversation <ArrowUpRight size={16} /></Button></Reveal><div className="cta-aside">TULAS<br />INTERNATIONAL<br />SCHOOL <span>DEHRADUN · INDIA</span></div></section>
  </>
}