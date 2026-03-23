import '../styles/Hero.css'
import couplePhoto from '../assets/mainimage.jpeg'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <img
        src={couplePhoto}
        alt="The Happy Couple"
        className="hero-bg"
        loading="eager"
      />
      <div className="hero-overlay" />

      <div className="hero-content">
        {/* <p className="hero-save-date">✦ Save the Date ✦</p> */}

        <h1 className="hero-names">
          <span>Naidu</span>
          <em className="hero-ampersand">&amp;</em>
          <span>Gnanasri</span>
        </h1>

        <div className="hero-date-badge">
          <p>1st April 2026</p>
          <div className="dot" />
          <p>Kothapalem, Vizag</p>
          <div className="dot" />
          <p>6:00 PM</p>
        </div>
      </div>

      <div className="hero-scroll-cue">
        <span>Scroll</span>
        <div className="scroll-arrow" />
      </div>
    </section>
  )
}
