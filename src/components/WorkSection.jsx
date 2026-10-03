import { Link } from 'react-router-dom'
import SectionHeading from './SectionHeading'
import Gallery from './Gallery'

export default function WorkSection() {
  return (
    <section aria-labelledby="work-title" className="section-y">
      <div className="container-x">
        <SectionHeading id="work-title" title="Our Work in Action" subtitle="Real people. Real stories. Real impact." />
        <Gallery limit={8} />
        <div className="mt-8 text-center"><Link to="/gallery" className="btn btn-royal">View All Activities</Link></div>
      </div>
    </section>
  )
}
