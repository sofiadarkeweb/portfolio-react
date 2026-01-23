import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const CONTACT_LINKS = [
  {
    label: 'EMAIL',
    href: 'mailto:sofia.darke@hyperisland.se',
    external: false,
  },
  {
    label: 'LINKEDIN',
    href: 'https://www.linkedin.com/in/sofia-darke-1177932b',
    external: true,
  },
  {
    label: 'GITHUB',
    href: 'https://github.com/sofiadarkeweb',
    external: true,
  },
] as const

export const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true })
  }, [])

  return (
    <section id="contact-section" className="contact">
      <div className="contact-content">
        <h2 className="contact-headline" data-aos="fade-up">
          <span className="contact-line">LET&apos;S BUILD</span>
          <span className="contact-line">SOMETHING</span>
          <span className="contact-line">TOGETHER.</span>
        </h2>

        <div className="contact-links" data-aos="fade-up" data-aos-delay="200">
          {CONTACT_LINKS.map(({ label, href, external }) => (
            <a
              key={label}
              className="contact-link"
              href={href}
              {...(external && {
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
