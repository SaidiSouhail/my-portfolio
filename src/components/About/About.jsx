import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-title">
        <h2>About Me</h2>
        <div className="title-line"></div>
      </div>

      <div className="about-container">
        <div className="about-text">
          <h3>
            Passionate Frontend Developer creating modern digital experiences.
          </h3>

          <p>
           I enjoy building responsive and interactive web applications that provide a smooth user experience. My focus is on writing clean code, creating attractive interfaces, and continuously improving my development skills.
           I have experience working with APIs in my projects, integrating real data to build dynamic and functional web applications.  
          </p>

          <p>
            Currently working with React, JavaScript, HTML, CSS and modern web
            development tools while expanding my knowledge through projects.
          </p>
        </div>

        <div className="about-cards">
          <div className="info-card">
            <h4>Web Development</h4>
            <span>I build modern, responsive web apps using React with clean UI and good performance.</span>
          </div>

          <div className="info-card">
            <h4>Frontend</h4>
            <span>React, JavaScript, HTML & CSS for building Responsive Web Apps</span>
          </div>

          <div className="info-card">
            <h4>Focus</h4>
            <span>Focused on building user-friendly interfaces with strong attention to design and usability.</span>
          </div>

          <div className="info-card">
            <h4>Learning</h4>
            <span>Continuous Learning</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;