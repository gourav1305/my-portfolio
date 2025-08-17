export default function SectionHeading({ title, subtitle }) {
    return (
      <div className="section-heading">
        <h2>{title}</h2>
        {subtitle && <p className="muted">{subtitle}</p>}
      </div>
    )
  }
  