import '../styles/Details.css'

const details = [
  {
    icon: '🗓️',
    label: 'Date',
    value: 'Wednesday',
    sub: '1 April 2026',
  },
  {
    icon: '⏰',
    label: 'Time',
    value: '6:00 PM',
    sub: 'Reception follows at 8:30 PM',
  },
  {
    icon: '🏛️',
    label: 'Venue',
    value: 'At our residence',
    sub: 'Kothapalem, Visakhapatnam',
  },
]

export default function Details() {
  return (
    <section className="details-section" id="details">
      <p className="section-label">Wedding Details</p>
      <h2 className="details-heading">Join Us for Our Special Day</h2>
      <p className="details-sub">We are overjoyed to invite you to celebrate this sacred union</p>

      <div className="divider">
        <span className="divider-icon">✦ ✦ ✦</span>
      </div>

      <div className="details-cards">
        {details.map((d) => (
          <div className="detail-card" key={d.label}>
            <span className="detail-icon">{d.icon}</span>
            <h3>{d.label}</h3>
            <p>{d.value}</p>
            <p className="sub-text">{d.sub}</p>
          </div>
        ))}
      </div>

    </section>
  )
}
