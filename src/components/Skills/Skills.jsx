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
          <h3>Frontend (Web)</h3>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Mobile (React Native)</h3>
          <ul>
            <li>React Native</li>
            <li>Expo</li>
            <li>Cross-platform App Development</li>
            <li>Mobile UI Design</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>API & Data</h3>
          <ul>
            <li>REST APIs</li>
            <li>Fetch / Axios</li>
            <li>JSON Handling</li>
            <li>Async / Await</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Styling & UI</h3>
          <ul>
            <li>CSS</li>
            <li>Tailwind CSS</li>
            <li>NativeWind</li>
            <li>Responsive Design</li>
            <li>Modern UI Implementation</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Tools</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Vite</li>
            <li>Expo</li>
            <li>NPM</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;