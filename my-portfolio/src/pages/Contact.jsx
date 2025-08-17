import SectionHeading from '../components/SectionHeading'

export default function Contact() {
  return (
    <section className="page">
      <SectionHeading title="Contact" subtitle="Let’s work together" />
      <form className="form">
        <div className="form-row">
          <label>Name</label>
          <input type="text" placeholder="Your name" />
        </div>
        <div className="form-row">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" />
        </div>
        <div className="form-row">
          <label>Message</label>
          <textarea rows="5" placeholder="Tell me about your project" />
        </div>
        <button className="btn btn-primary">Send Message</button>
      </form>
    </section>
  )
}
