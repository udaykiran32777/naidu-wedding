import '../styles/Gallery.css'

const galleryItems = [
  {
    src: '/gallery-sample.png',
    label: 'Our Reception Venue',
    span: true,
  },
  {
    src: null,
    label: 'Pre-Wedding Shoot',
    placeholder: true,
  },
  {
    src: null,
    label: 'Mehendi Ceremony',
    placeholder: true,
  },
  {
    src: null,
    label: 'Sangeet Night',
    placeholder: true,
  },
]

export default function Gallery() {
  return (
    <>
      {/* Gallery */}
      <section className="gallery-section" id="gallery">
        <p className="section-label">Our Story</p>
        <h2 className="gallery-heading">Moments to Cherish</h2>
        <p className="gallery-sub">A glimpse of our journey together — more memories to come soon</p>

        <div className="divider">
          <span className="divider-icon">✦ ✦ ✦</span>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, i) => (
            <div className={`gallery-card${item.placeholder ? ' gallery-placeholder' : ''}`} key={i}>
              {item.placeholder ? (
                <>
                  <span className="ph-icon">📷</span>
                  <span className="ph-text">Photo Coming Soon</span>
                </>
              ) : (
                <>
                  <img src={item.src} alt={item.label} loading="lazy" />
                  <div className="gallery-card-overlay">
                    <span className="gallery-card-label">{item.label}</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section" id="footer">
        <div className="footer-monogram">A &amp; A</div>
        <div className="footer-content">
          <p className="footer-quote">"Two souls, one heart — forever bound by love"</p>
          <p className="footer-sub">With love &amp; gratitude</p>
          <p className="footer-names">Aanya &amp; Arjun</p>
          <span className="footer-hearts">♥ ♥ ♥</span>
        </div>
      </footer>
    </>
  )
}
