import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-col brand">
          <h2>{"<"}Saidi Souhail{"/>"}</h2>
          <p>
            Frontend Developer specializing in React and React Native, building modern,
            responsive, and high-performance user interfaces with clean design and smooth user experience.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-col">
          <h4>Projects</h4>
          <a href="#projects">Anime E-Commerce App</a>
          <a href="#projects">Anime Explorer (API)</a>
          <a href="#projects">Admin Dashboard</a>
          <a href="#projects">Chat App Firebase</a>
          <a href="#projects">EcomVault</a>
          <a href="#projects">AniVault (API)</a>
        </div>

        <div className="footer-col">
          <h4>Connect</h4>
          <a href="mailto:your@email.com">Email</a>
          <a href="https://github.com/SaidiSouhail">GitHub</a>
          <a href="https://www.linkedin.com/in/saidi-souhail-32016338a/">LinkedIn</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {year} Saidi Souhail. All rights reserved.</p>
        <p className="status">● Open to freelance opportunities</p>
      </div>

    </footer>
  );
}

export default Footer;