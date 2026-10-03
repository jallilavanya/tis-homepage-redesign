import { useState } from 'react'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { testimonials } from '../../data/content'
import { Reveal } from '../ui'

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const change = (direction: number) => setActive((index) => (index + direction + testimonials.length) % testimonials.length)
  const story = testimonials[active]
  return <section className="stories-section section-pad" id="stories">
    <div className="section-wrap stories-wrap">
      <Reveal className="stories-heading"><span className="eyebrow">From the Tulas community</span><h2>It’s the little<br /><em>things.</em></h2><span className="stories-counter">0{active + 1} <i /> 0{testimonials.length}</span></Reveal>
      <div className="story-stage"><Quote className="quote-mark" size={38} strokeWidth={1.1} /><AnimatePresence mode="wait"><motion.div className="story-quote" key={active} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}><blockquote>“{story.quote}”</blockquote><div className="story-author"><span className="author-mark">T</span><span><strong>{story.name}</strong><small>{story.role}</small></span></div></motion.div></AnimatePresence><div className="story-controls"><button className="icon-button" onClick={() => change(-1)} aria-label="Previous story"><ArrowLeft size={18} /></button><button className="icon-button" onClick={() => change(1)} aria-label="Next story"><ArrowRight size={18} /></button></div></div>
    </div>
  </section>
}