import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { NAV_LINKS } from '../data/siteData'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const esc = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc)
    return () => { window.removeEventListener('keydown', esc); document.body.style.overflow = '' }
  }, [open])

  const linkCls = ({ isActive }) =>
    `rounded-full px-2.5 py-2 text-[13px] font-medium transition xl:px-3 xl:text-sm ${isActive ? 'text-royal font-semibold' : 'text-ink/75 hover:text-royal'}`

  return (
    <header className={`sticky top-0 z-40 w-full transition ${scrolled || open ? 'bg-white/90 shadow-soft backdrop-blur-md' : 'bg-white'}`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:rounded focus:bg-white focus:px-3 focus:py-2">Skip to content</a>
      <div className="container-x flex h-16 items-center justify-between sm:h-[72px]">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkCls}>{l.label}</NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/donate" className="btn btn-royal hidden !py-2.5 lg:inline-flex">Donate Now</Link>
          <button
            className="grid h-11 w-11 place-items-center rounded-full text-royal lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-royal/10 bg-white lg:hidden"
          >
            <ul className="container-x flex flex-col py-3">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => `flex min-h-[48px] items-center border-b border-royal/5 text-base font-medium ${isActive ? 'text-royal' : 'text-ink/80'}`}>{l.label}</NavLink>
                </li>
              ))}
              <li className="py-4"><Link to="/donate" className="btn btn-saffron w-full">Donate Now</Link></li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
