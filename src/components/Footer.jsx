import { Link } from 'react-router-dom'
import { Instagram, Facebook, Youtube } from 'lucide-react'
import Logo from './Logo'
import { ORG, SOCIAL, NAV_LINKS } from '../data/siteData'

export default function Footer() {
  const socials = [[Instagram, 'Instagram', SOCIAL.instagram], [Facebook, 'Facebook', SOCIAL.facebook], [Youtube, 'YouTube', SOCIAL.youtube]]
  return (
    <footer className="w-full bg-royal-700 pb-24 pt-10 text-white lg:pb-8">
      <div className="container-x grid gap-8 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-3 max-w-xs text-sm text-white/75">{ORG.mission}</p>
        </div>
        <nav aria-label="Footer">
          <p className="mb-3 text-sm font-semibold">Quick Links</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/80">
            {NAV_LINKS.map((l) => <li key={l.to}><Link to={l.to} className="hover:text-saffron">{l.label}</Link></li>)}
          </ul>
        </nav>
        <div>
          <p className="mb-3 text-sm font-semibold">Our Social Media</p>
          <div className="flex gap-3">
            {socials.map(([I, l, h]) => <a key={l} href={h} aria-label={l} target="_blank" rel="noopener noreferrer" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 transition hover:bg-saffron hover:text-ink"><I className="h-5 w-5" aria-hidden="true" /></a>)}
          </div>
          <Link to="/donate" className="btn btn-saffron mt-5">Donate Now</Link>
        </div>
      </div>
      <p className="container-x mt-8 border-t border-white/10 pt-4 text-xs text-white/60">© {new Date().getFullYear()} {ORG.name}. All rights reserved.</p>
    </footer>
  )
}
