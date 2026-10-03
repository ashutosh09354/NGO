import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Photo from './Photo'

export default function ActivityCard({ title, text, image, date, to = '/work' }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="aspect-[4/3] overflow-hidden">
        <div className="h-full w-full transition duration-500 group-hover:scale-105"><Photo src={image} alt={title} /></div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        {date && <time className="text-xs font-medium text-leaf-700">{date}</time>}
        <h3 className="text-base font-bold">{title}</h3>
        <p className="mt-1 text-sm text-ink/70">{text}</p>
        <Link to={to} className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-semibold text-saffron-700">
          Read More <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
