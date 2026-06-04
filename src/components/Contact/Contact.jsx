import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="contact-wrapper">

        <h2>My Contact Info</h2>

        <p className="subtitle">
          I’m currently open to freelance work or frontend job opportunities.
        </p>

        <p className="email">
           saidisouhailjob@gmail.com
        </p>

        <div className="actions">
          <a href="mailto:yourname@gmail.com" className="btn">
            Send Email
          </a>

          <a href="https://github.com/yourname" className="btn outline">
            GitHub
          </a>
        </div>

        <p className="note">
          Usually responds within 24 hours 🚀
        </p>

      </div>

    </section>
  );
}

export default Contact;