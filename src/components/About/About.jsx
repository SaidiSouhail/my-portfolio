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
            Passionate React & React Native Developer building modern experiences.
          </h3>

          <p>
            I enjoy building responsive and interactive web and mobile
            applications that provide a smooth user experience. My focus is on
            writing clean code, creating attractive interfaces, and continuously
            improving my development skills.
          </p>

          <p>
            I have experience working with APIs and real data integration to
            build dynamic applications. I work with React for web development
            and React Native for mobile apps.
          </p>

          <p>
            Currently working with React, React Native, JavaScript, TypeScript
            Tailwind CSS, NativeWind, HTML, CSS, and Expo while expanding my
            knowledge through real projects.
          </p>
        </div>

        <div className="about-cards">
          <div className="info-card">
            <h4>Web Development</h4>
            <span>
             I build modern, responsive web applications using React delivering clean and intuitive user interfaces and smooth user experiences.
            </span>
          </div>

          <div className="info-card">
            <h4>Mobile Development</h4>
            <span>
              I develop cross-platform mobile apps using React Native
              for Android and iOS.
            </span>
          </div>

          <div className="info-card">
            <h4>Frontend Skills</h4>
            <span>
              React, React Native, JavaScript, TypeScript, HTML, TailWind, NativeWind and CSS
            </span>
          </div>

          <div className="info-card">
            <h4>Focus</h4>
            <span>
              Focused on user-friendly interfaces, clean design, and smooth
              user experience across web and mobile.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;