import { useState } from 'react'
import { ArrowUpRight, Maximize2, Play, X } from 'lucide-react'
import { images } from '../../data/content'
import { Modal, Reveal } from '../ui'

const gallery = [
  { image: images.campus, label: 'A campus in the green' },
  { image: images.library, label: 'Space to think' },
  { image: images.sports, label: 'Find your stride' },
]

export default function Campus({ open, onClose, onOpen }: { open: boolean; onClose: () => void; onOpen: () => void }) {
  const [selectedImage, setSelectedImage] = useState(0)
  return <section className="campus-section section-pad" id="campus">
    <div className="section-wrap campus-wrap">
      <Reveal className="campus-intro"><span className="eyebrow">Come and feel the difference</span><h2>More than a<br /><em>place.</em></h2><p>Set against the foothills of Dehradun, Tulas is a place to stretch out, slow down and find out what you can do.</p><button className="text-link" onClick={() => { setSelectedImage(0); onOpen() }}>See campus highlights <span><ArrowUpRight size={15} /></span></button></Reveal>
      <Reveal className="campus-gallery" delay={0.12}>
        <button className="campus-main-image" onClick={() => { setSelectedImage(0); onOpen() }} data-cursor aria-label="Open campus photograph"><img src={images.campus} alt="Campus architecture framed by green trees" /><span className="image-open"><Maximize2 size={16} /></span><span className="campus-image-label">THE TULAS CAMPUS <i>01 / 03</i></span></button>
        <button className="campus-side-image" onClick={() => { setSelectedImage(1); onOpen() }} data-cursor aria-label="Open library photograph"><img src={images.library} alt="A quiet library filled with books" /><span className="side-image-arrow"><ArrowUpRight size={17} /></span></button>
        <button className="campus-play" onClick={() => { setSelectedImage(2); onOpen() }} aria-label="View sports and campus life"><span><Play size={13} fill="currentColor" /></span> A day at Tulas</button>
      </Reveal>
      <Reveal className="campus-note"><span>30° 24' N&nbsp; 78° 04' E</span><span>Dehradun, India</span></Reveal>
    </div>
    <Modal open={open} onClose={onClose} title="Tulas campus tour">
      <div className="gallery-modal">
        <div className="gallery-modal-image"><img src={gallery[selectedImage].image} alt={gallery[selectedImage].label} /><button className="icon-button gallery-close" onClick={onClose} aria-label="Close campus tour"><X size={19} /></button></div>
        <div className="gallery-modal-meta"><div><span className="eyebrow">A glimpse of Tulas</span><h3>{gallery[selectedImage].label}</h3></div><div className="gallery-controls">{gallery.map((item, index) => <button key={item.label} className={`gallery-thumb${selectedImage === index ? ' is-active' : ''}`} onClick={() => setSelectedImage(index)} aria-label={`View ${item.label}`}><img src={item.image} alt="" /></button>)}</div></div>
      </div>
    </Modal>
  </section>
}