import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-header">
        <h2>Skills</h2>
         <div className="title-line"></div>
        <p>Technologies I work with</p>
      </div>

      <div className="skills-grid">

        <div className="skill-card">
          <h3>Frontend</h3>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>Html</li>
            <li>Css</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>API & Data</h3>
          <ul>
            <li>REST APIs</li>
            <li>Fetch / Axios</li>
            <li>JSON Handling</li>
            <li>Async/Await</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Tools</h3>
          <ul>
            <li>VS Code</li>
            <li>Vite</li>
            <li>NPM</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Styling</h3>
          <ul>
            <li>Modern UI Design Implementation</li>
            <li>Responsive Design</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;