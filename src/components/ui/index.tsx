import { AnimatePresence, motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion'
import { X } from 'lucide-react'
import type { ComponentProps, ReactNode } from 'react'
import { useCursor } from '../../hooks/useCursor'
import { useScrollProgress } from '../../hooks/useScrollProgress'

type RevealProps = { children: ReactNode; className?: string; delay?: number } & Omit<HTMLMotionProps<'div'>, 'children' | 'className' | 'initial' | 'whileInView' | 'viewport' | 'transition'>

export function Reveal({ children, className = '', delay = 0, ...props }: RevealProps) {
  const reducedMotion = useReducedMotion()
  return <motion.div {...props} className={className} initial={reducedMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}

export function Button({ children, href, onClick, variant = 'dark', type = 'button' }: { children: ReactNode; href?: string; onClick?: () => void; variant?: 'dark' | 'gold' | 'outline'; type?: 'button' | 'submit' }) {
  const className = `button button-${variant}`
  return href ? <a className={className} href={href}>{children}</a> : <button className={className} type={type} onClick={onClick}>{children}</button>
}

export function ProgressBar() {
  const progress = useScrollProgress()
  return <div className="progress-track" aria-hidden="true"><div className="progress-fill" style={{ transform: `scaleX(${progress})` }} /></div>
}

export function Cursor() {
  const { x, y, active } = useCursor()
  return <div className={`custom-cursor${active ? ' is-active' : ''}`} style={{ transform: `translate3d(${x}px, ${y}px, 0)` }} aria-hidden="true" />
}

export function Modal({ open, onClose, children, title }: { open: boolean; onClose: () => void; children: ReactNode; title: string }) {
  return <AnimatePresence>{open && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}><motion.section className="modal-panel" role="dialog" aria-modal="true" aria-label={title} initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.98 }}><button className="icon-button modal-close" onClick={onClose} aria-label="Close dialog"><X size={19} /></button>{children}</motion.section></motion.div>}</AnimatePresence>
}

export function Card({ children, className = '', ...props }: ComponentProps<'article'>) {
  return <article {...props} className={className}>{children}</article>
}