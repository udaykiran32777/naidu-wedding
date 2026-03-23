import '../styles/MapSection.css'

export default function MapSection() {
  // Mumbai Marine Drive coordinates — replace with your actual venue
  const mapsEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.9457025143647!2d83.2086224!3d17.747197399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3967d35975c83d%3A0xcc4abc5525f910a1!2s5-18%2C%20Santosh%20Nagar%2C%20Kothapalem%2C%20Pullambotlapalem%2C%20Andhra%20Pradesh%20530027!5e0!3m2!1sen!2sin!4v1774240434543!5m2!1sen!2sin'
  const directionsUrl =
    'https://maps.app.goo.gl/jZN9RoNKvPFGD1Pi8'
  return (
    <section className="map-section" id="venue">
      <p className="section-label">Find Us</p>
      <h2 className="map-heading">The Venue</h2>
      <p className="map-address">At our residence · Kothapalem, Visakhapatnam</p>

      <div className="divider">
        <span className="divider-icon">✦ ✦ ✦</span>
      </div>

      <div className="map-container">
        <iframe
          src={mapsEmbedUrl}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Wedding Venue Map"
        />
        <div className="map-overlay-tag">
          <h4>Naidu's Home</h4>
          <p>Kothapalem, Vizag</p>
        </div>
      </div>

      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="map-directions-btn"
        id="get-directions-btn"
      >
        📍 &nbsp; Get Directions
      </a>
    </section>
  )
}
