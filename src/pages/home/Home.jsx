import "./Home.css";

function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">React & React Native Developer</p>

        <h1>
          Building Modern
          <span> Web & Mobile Experiences</span>
        </h1>

        <p className="hero-description">
          I build modern, responsive websites and high-quality mobile
          applications using React, React Native, TypeScript, JavaScript,
          Tailwind CSS, NativeWind, HTML, CSS.
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
          <span className="line">role: "React & React Native Developer",</span>
          <span className="line">
            skills: [
          </span>
          <span className="line">
            "React", "React Native",
          </span>
          <span className="line">
            "JavaScript", "TypeScript",
          </span>
          <span className="line">
            "Tailwind CSS", "NativeWind",
          </span>
          <span className="line">
            "HTML", "CSS"
          </span>
          <span className="line">],</span>
          <span className="line">
            focus: "Web & Mobile Development"
          </span>
          <span className="line green">{"};"}</span>
        </div>
      </div>
    </section>
  );
}

export default Home;