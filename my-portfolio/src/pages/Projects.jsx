import SectionHeading from '../components/SectionHeading'

const data = [
  { id: 1, title: 'Analytics Dashboard', img: 'https://tse4.mm.bing.net/th/id/OIP.8QHCCv6H9qxRxK4oGe8ghQHaER?pid=Api&P=0&h=180', desc: 'React + Charts + Auth' },
  { id: 2, title: 'E-commerce UI',       img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/46e83a68931323.5b6e2cc12cd28.jpg', desc: 'Product pages & cart' },
  { id: 3, title: 'Marketing Website',   img: 'https://tse3.mm.bing.net/th/id/OIP.8Pq9TXk__xWgKez8epLjAwHaE8?pid=Api&P=0&h=180', desc: 'Landing, blog & SEO' },
]

export default function Projects() {
  return (
    <section className="page">
      <SectionHeading title="Projects" subtitle="Selected work" />
      <div className="grid-3">
        {data.map(card => (
          <article key={card.id} className="project-card">
            <img src={card.img} alt={card.title} />
            <div className="project-body">
              <h4>{card.title}</h4>
              <p className="muted">{card.desc}</p>
              <button className="btn btn-ghost">View Details</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
