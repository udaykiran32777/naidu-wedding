import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Details from './components/Details'
import MapSection from './components/MapSection'
import Gallery from './components/Gallery'
import './App.css'

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#details', label: 'Details' },
    { href: '#venue', label: 'Venue' },
    { href: '#gallery', label: 'Gallery' },
  ]

  return (
    <div className="app">
      {/* ─── Navbar ─────────────────────────────────── */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-logo">N &amp; G</div>
        <ul className="navbar-links">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="navbar-link">{l.label}</a>
            </li>
          ))}
        </ul>
        {/* <a href="#details" className="navbar-rsvp">RSVP</a> */}
      </nav>

      {/* ─── Sections ───────────────────────────────── */}
      <Hero />
      <Details />
      <MapSection />
      {/* <Gallery /> */}
    </div>
  )
}
