import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { learningTabs } from '../../data/content'
import { Button, Reveal } from '../ui'

export default function Academics() {
  const [activeKey, setActiveKey] = useState(learningTabs[0].key)
  const active = learningTabs.find((tab) => tab.key === activeKey) ?? learningTabs[0]

  return <section className="learning-section section-pad" id="learning">
    <div className="section-wrap">
      <Reveal className="section-heading learning-heading"><span className="eyebrow">Learning, and everything around it</span><h2>Find your <em>way.</em></h2><p>Every age brings a new kind of possibility. We make space for all of them.</p></Reveal>
      <Reveal className="learning-tabs" delay={0.1} role="tablist" aria-label="School stages">
        {learningTabs.map((tab) => <button key={tab.key} className={`learning-tab${activeKey === tab.key ? ' is-active' : ''}`} role="tab" aria-selected={activeKey === tab.key} onClick={() => setActiveKey(tab.key)}>{tab.label}</button>)}
      </Reveal>
      <div className="learning-panel" role="tabpanel">
        <AnimatePresence mode="wait">
          <motion.div className="learning-image" key={active.key} initial={{ opacity: 0, scale: 1.025 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.99 }} transition={{ duration: 0.35 }} data-cursor>
            <img src={active.image} alt="Students learning and spending time together" />
            <span className="image-tag">{active.tag}</span>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.div className="learning-copy" key={`${active.key}-copy`} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.3 }}>
            <span className="eyebrow">{active.label}</span><h3>{active.title}</h3><p>{active.text}</p>
            <Button variant="outline" href="#admissions">Explore the journey <ArrowUpRight size={15} /></Button>
            <span className="learning-index">0{learningTabs.findIndex((tab) => tab.key === active.key) + 1} <i /> 04</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  </section>
}