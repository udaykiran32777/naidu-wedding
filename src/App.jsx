import { useState, useEffect, useRef } from 'react'
import Hero from './components/Hero'
import Details from './components/Details'
import MapSection from './components/MapSection'
import Gallery from './components/Gallery'
import './App.css'
import backgroundMusic from './assets/music.mp3'

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', onScroll)

    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => {
          setIsPlaying(true)
        }).catch(() => { })
      }
      document.removeEventListener('click', handleFirstInteraction)
      document.removeEventListener('touchstart', handleFirstInteraction)
      window.removeEventListener('scroll', handleFirstInteraction)
    }

    document.addEventListener('click', handleFirstInteraction)
    document.addEventListener('touchstart', handleFirstInteraction)
    window.addEventListener('scroll', handleFirstInteraction, { once: true })

    // Attempt autoplay logic programmatically as a fallback
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        // Autoplay was blocked, handled by interactions
      })
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('click', handleFirstInteraction)
      document.removeEventListener('touchstart', handleFirstInteraction)
      window.removeEventListener('scroll', handleFirstInteraction)
    }
  }, []) // Remove isPlaying from deps so we only add event listeners once

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#details', label: 'Details' },
    { href: '#venue', label: 'Venue' },
    { href: '#gallery', label: 'Gallery' },
  ]

  return (
    <div className="app">
      {/* ─── Background Music ───────────────────────── */}
      <audio
        ref={audioRef}
        loop
        autoPlay
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        src={backgroundMusic}
      />

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
