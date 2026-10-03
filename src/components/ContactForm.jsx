import { useState } from 'react'
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { CONTACT, SOCIAL } from '../data/siteData'

const input = 'w-full rounded-xl border border-royal/15 bg-white px-4 py-3 text-sm placeholder:text-ink/40 focus:border-royal'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    // TODO: connect to your backend, Formspree, EmailJS, etc.
    setSent(true)
  }
  const info = [
    { icon: MapPin, label: 'Address', value: CONTACT.address },
    { icon: Phone, label: 'Phone', value: CONTACT.phone },
    { icon: Mail, label: 'Email', value: CONTACT.email },
  ]
  const socials = [
    { icon: Instagram, label: 'Instagram', href: SOCIAL.instagram },
    { icon: Facebook, label: 'Facebook', href: SOCIAL.facebook },
    { icon: Youtube, label: 'YouTube', href: SOCIAL.youtube },
  ]
  return (
    <section id="contact" aria-labelledby="contact-title" className="section-y">
      <div className="container-x">
        <SectionHeading id="contact-title" title="Contact Us" subtitle="We'd love to hear from you. Get in touch with us." />
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
          <ul className="space-y-5">
            {info.map(({ icon: I, label, value }) => (
              <li key={label} className="flex gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-leaf-50 text-leaf"><I className="h-5 w-5" aria-hidden="true" /></span>
                <div><p className="text-sm font-bold text-royal">{label}</p><p className="text-sm text-ink/75">{value}</p></div>
              </li>
            ))}
            <li className="flex gap-3 pt-1">
              {socials.map(({ icon: I, label, href }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="grid h-11 w-11 place-items-center rounded-full bg-royal text-white transition hover:bg-saffron hover:text-ink"><I className="h-5 w-5" aria-hidden="true" /></a>
              ))}
            </li>
          </ul>

          <form id="volunteer-form" onSubmit={submit} className="space-y-4 rounded-2xl bg-white p-5 shadow-soft sm:p-6" aria-label="Contact form">
            {sent ? (
              <p role="status" className="rounded-xl bg-leaf-50 p-4 text-sm font-medium text-leaf-700">Thank you. Your message has been sent and we will get back to you soon.</p>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div><label htmlFor="c-name" className="mb-1 block text-sm font-medium">Name</label><input id="c-name" name="name" required autoComplete="name" className={input} placeholder="Your name" /></div>
                  <div><label htmlFor="c-phone" className="mb-1 block text-sm font-medium">Phone</label><input id="c-phone" name="phone" type="tel" autoComplete="tel" className={input} placeholder="Your phone number" /></div>
                </div>
                <div><label htmlFor="c-email" className="mb-1 block text-sm font-medium">Email</label><input id="c-email" name="email" type="email" autoComplete="email" className={input} placeholder="Your email" /></div>
                <div><label htmlFor="c-msg" className="mb-1 block text-sm font-medium">Message</label><textarea id="c-msg" name="message" required rows={4} className={input} placeholder="How can we help?" /></div>
                <button type="submit" className="btn btn-royal w-full">Send Message</button>
              </>
            )}
          </form>
        </div>
        <span id="partner-form" />
      </div>
    </section>
  )
}
