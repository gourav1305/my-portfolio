import SectionHeading from '../components/SectionHeading'
import TeamCard from '../components/TeamCard'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home">

      {/* HERO: Left big image, right heading + text (wireframe top) */}
      <section className="hero two-col">
        <div className="col">
          <img
            className="hero-img"
            src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero"
          />
        </div>
        <div className="col">
          <h1>Hi, I’m Gourav Shrivas</h1>
          <p className="lead">
            I build performant web apps with React, Node.js and modern tooling.
            I love clean design and delightful UX.
          </p>
          <div className="btn-row">
            <Link to="/projects" className="btn btn-primary">View Projects</Link>
            <Link to="/contact" className="btn btn-ghost">Contact Me</Link>
          </div>
        </div>
      </section>

      {/* TEXT + IMAGE (wireframe second block) */}
      <section className="two-col feature">
        <div className="col">
          <SectionHeading
            title="What I Build"
            subtitle="Crafting modern web experiences with clean design and optimized performance."
          />
          <p>
            I specialize in building SPAs, dashboards, and marketing sites. 
            My focus areas are component design, state management, and
            performance optimization.
          </p>
          <ul className="tick-list">
            <li>React + JavaScript</li>
            <li>Node.js APIs</li>
            <li>Responsive, accessible UI</li>
          </ul>
        </div>
        <div className="col">
          <img
            className="rounded-img"
            src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
            alt="Feature"
          />
        </div>
      </section>

      {/* TEAM / TESTIMONIAL like (wireframe middle with 3 cards) */}
      <section className="team">
        <SectionHeading
          title="People I’ve Collaborated With"
          subtitle="Building ideas together with amazing minds."
        />
        <div className="grid-3">
          <TeamCard name="Arjun Mehta" role="Founder" img="https://images.unsplash.com/photo-1633605435219-654abe70d37e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <TeamCard name="Neha Kapoor" role="CTO"     img="https://plus.unsplash.com/premium_photo-1676106975756-178b02b65d4c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <TeamCard name="Rohan Singh" role="Designer" img="https://images.unsplash.com/photo-1626970851465-1bfddbbecdb1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </section>

      {/* CTA (wireframe bottom with button) */}
      <section className="cta">
        <SectionHeading
          title="Let’s Build Something Awesome Together"
          subtitle="Let’s connect and create something impactful."
        />
        <p className="muted">
          Let’s build something great together. I’m open for freelance and full-time roles.
        </p>
        <Link to="/contact" className="btn btn-primary">Let’s Talk</Link>
      </section>
    </div>
  )
}
