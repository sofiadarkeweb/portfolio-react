import { Link } from 'react-scroll'
import { ThemeToggle } from './ThemeToggle'

export const NavBar = () => {
  return (
    <nav className="nav-left">
      <Link
        className="nav-link"
        href="/about"
        activeClass="active"
        to="about-section"
        spy={true}
        smooth={true}
        duration={700}
      >
        ABOUT
      </Link>
      <Link
        className="nav-link"
        href="/work"
        activeClass="active"
        to="project-list"
        spy={true}
        smooth={true}
        duration={500}
      >
        WORK
      </Link>
      <Link
        className="nav-link"
        href="/contact"
        activeClass="active"
        to="contact-section"
        spy={true}
        smooth={true}
        duration={1000}
      >
        CONTACT
      </Link>
      <ThemeToggle />
    </nav>
  )
}
