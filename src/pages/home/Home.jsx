import "./Home.css";

function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">Frontend Developer</p>

        <h1>
          Building Modern
          <span> Web Experiences</span>
        </h1>

        <p className="hero-description">
          I Create Responsive and Visually Appealing Web Apps using
          React, JavaScript, HTML, and CSS.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>

          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-card">
        <div className="card-glow"></div>

        <div className="code-card">
          <span className="line blue">const developer = {"{"}</span>
          <span className="line">name: "Saidi Souhail",</span>
          <span className="line">role: "Frontend Developer",</span>
          <span className="line">skills: ["React", "JavaScript" , "HTML", "CSS"],</span>
          <span className="line green">{"};"}</span>
        </div>
      </div>
    </section>
  );
}

export default Home;