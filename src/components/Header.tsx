import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const links = [
  ['Our story', '#about'],
  ['Learning', '#learning'],
  ['Campus life', '#campus'],
  ['Admissions', '#admissions'],
  ['Contact', '#contact'],
]

export default function Header({ onInquire }: { onInquire: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  })

  const closeMenu = () => setMenuOpen(false)

  return <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
    <a className="brand" href="#top" aria-label="Tulas International School home" onClick={closeMenu}>
      <span className="brand-mark"><span>T</span></span>
      <span className="brand-wordmark"><strong>TULAS</strong><small>INTERNATIONAL SCHOOL</small></span>
    </a>
    <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
      {links.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
      <button className="mobile-theme" onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>{theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}<span>{theme === 'light' ? 'Dark' : 'Light'} appearance</span></button>
      <button className="button button-gold mobile-apply" onClick={() => { closeMenu(); onInquire() }}>Enquire now <ArrowUpRight size={15} /></button>
    </nav>
    <div className="header-actions">
      <button className="icon-button theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>
        {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
      </button>
      <button className="button button-gold desktop-apply" onClick={onInquire}>Enquire now <ArrowUpRight size={15} /></button>
      <button className="icon-button menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
    </div>
  </header>
}