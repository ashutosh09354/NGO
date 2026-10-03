import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ImpactIntro from '../components/ImpactIntro'
import About from '../components/About'
import CausesSection from '../components/CausesSection'
import FeaturedActivity from '../components/FeaturedActivity'
import WorkSection from '../components/WorkSection'
import MediaSection from '../components/MediaSection'
import StoriesSection from '../components/StoriesSection'
import VolunteerSection from '../components/VolunteerSection'
import InstagramSection from '../components/InstagramSection'
import CTASection from '../components/CTASection'
import ContactForm from '../components/ContactForm'
import DonateSection from '../components/DonateSection'
import Gallery from '../components/Gallery'
import SectionHeading from '../components/SectionHeading'
import CauseCard from '../components/CauseCard'
import { CAUSES } from '../data/siteData'

export const Home = () => (
  <>
    <Hero /><ImpactIntro /><About /><CausesSection /><FeaturedActivity />
    <WorkSection /><MediaSection /><StoriesSection /><VolunteerSection />
    <InstagramSection /><CTASection /><ContactForm />
  </>
)
export const AboutPage = () => (<><About full /><FeaturedActivity /><VolunteerSection /><CTASection /></>)
export const CausesPage = () => (
  <section className="section-y"><div className="container-x">
    <SectionHeading title="Our Causes" subtitle="We work towards a stronger and more compassionate society." />
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{CAUSES.map((c) => <CauseCard key={c.slug} {...c} to="/work" />)}</div>
  </div></section>
)
export const WorkPage = () => (<><WorkSection /><StoriesSection /><CTASection /></>)
export const MediaPage = () => (<><MediaSection /><CTASection /></>)
export const GalleryPage = () => (
  <section className="section-y"><div className="container-x"><SectionHeading title="Gallery" subtitle="Real people. Real stories. Real impact." /><Gallery /></div></section>
)
export const ContactPage = () => (<><ContactForm /><InstagramSection /></>)
export const DonatePage = () => (<><DonateSection /><CTASection /></>)
export const NotFound = () => (
  <section className="section-y text-center"><h1 className="text-3xl font-bold">Page not found</h1><Link to="/" className="btn btn-royal mt-6">Back to Home</Link></section>
)

export function ScrollManager({ pathname, hash }) {
  useEffect(() => {
    if (hash) setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 80)
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}
