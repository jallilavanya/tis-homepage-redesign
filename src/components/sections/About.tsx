import { ArrowUpRight } from 'lucide-react'
import { values } from '../../data/content'
import { Card, Reveal } from '../ui'

export default function About() {
  return <section className="about-section section-pad" id="about">
    <div className="section-wrap">
      <Reveal className="section-heading split-heading">
        <div><span className="eyebrow">A little more Tulas</span><h2>Not just what<br />they <em>learn.</em></h2></div>
        <p>It is the confidence to speak up, the joy of finding your thing, and the kind of friendships that feel like family. At Tulas, the whole person is part of the lesson.</p>
      </Reveal>
      <div className="values-grid">
        {values.map((value, index) => <Reveal key={value.number} delay={index * 0.06}>
          <Card className="value-card" data-cursor><div className="value-card-top"><span>{value.number}</span><span className="value-icon">{value.icon}</span></div><h3>{value.title}</h3><p>{value.text}</p><span className="value-link" aria-hidden="true"><ArrowUpRight size={16} /></span></Card>
        </Reveal>)}
      </div>
    </div>
  </section>
}