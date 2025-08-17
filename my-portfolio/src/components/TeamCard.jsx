export default function TeamCard({ name = "Name", role = "Role", img }) {
    return (
      <div className="team-card">
        <div className="avatar">
          <img src={img} alt={name} />
        </div>
        <h4>{name}</h4>
        <p className="muted">{role}</p>
      </div>
    )
  }
  