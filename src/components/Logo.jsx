import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ORG } from '../data/siteData'

export default function Logo({ light = false }) {
  const [failed, setFailed] = useState(false)
  return (
    <Link to="/" aria-label={`${ORG.name} — home`} className="flex items-center gap-2.5">
      {failed ? (
        <span aria-hidden="true" className="grid h-11 w-11 place-items-center rounded-full bg-royal text-sm font-bold text-white ring-2 ring-saffron">JM</span>
      ) : (
        <img src={ORG.logo} alt="" onError={() => setFailed(true)} className="h-11 w-11 object-contain sm:h-12 sm:w-12" />
      )}
      <span className="leading-tight">
        <span className={`block text-[11px] font-bold sm:text-sm ${light ? 'text-white' : 'text-royal'}`}>JAN MANAV KALYAN<br />FOUNDATION</span>
        <span className="block text-[11px] font-semibold text-saffron">{ORG.hindiTagline}</span>
      </span>
    </Link>
  )
}
