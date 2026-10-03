import { ArrowDown, ArrowUpRight, Play, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { images, stats } from '../../data/content'
import { Button, Reveal } from '../ui'

export default function Hero({ onTour }: { onTour: () => void }) {
  return <section className="hero section-wrap" id="top">
    <div className="hero-copy">
      <motion.div className="eyebrow hero-eyebrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}><span className="eyebrow-dot" /> Dehradun, Uttarakhand <span className="eyebrow-divider">/</span> Est. 2013</motion.div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.8 }}>A wider world<br />starts <em>right here.</em></motion.h1>
      <motion.p className="hero-description" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38 }}>An education shaped by curiosity, grounded in values, and made for the person your child is becoming.</motion.p>
      <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.48 }}>
        <Button variant="dark" href="#campus">Explore our campus <ArrowUpRight size={16} /></Button>
        <a className="text-link" href="#learning">Discover Tulas <span><ArrowDown size={15} /></span></a>
      </motion.div>
      <div className="hero-footnote"><span className="footnote-line" /> A co-educational day & boarding school</div>
    </div>
    <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.28, duration: 0.9 }}>
      <div className="hero-image-frame" data-cursor><img src={images.campus} alt="Sunlit university-style campus building surrounded by trees" /></div>
      <div className="image-caption"><span>01 / 04</span><span>A campus with room to grow</span></div>
      <button className="tour-chip" onClick={onTour} aria-label="Open the campus virtual tour"><span className="play-disc"><Play size={13} fill="currentColor" /></span><span><small>TAKE A LOOK AROUND</small><strong>Explore Tulas</strong></span><ArrowUpRight className="tour-arrow" size={16} /></button>
      <motion.div className="hero-stamp" animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}><span>LEARN · LEAD · BELONG · </span></motion.div>
      <div className="floating-note"><Sparkles size={14} /><span>22 acres to<br />make your own</span></div>
    </motion.div>
    <Reveal className="stats-row" delay={0.12}>
      {stats.map((stat, index) => <div className="stat-item" key={stat.label}><span className="stat-index">0{index + 1}</span><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
    </Reveal>
  </section>
}