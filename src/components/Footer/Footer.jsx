import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-col brand">
          <h2>{"<"}Saidi Souhail{"/>"}</h2>
          <p>
            Frontend Developer building modern, responsive and interactive web applications using React.
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
          <h4>Work</h4>
          <a href="#">Anime E-Commerce App</a>
          <a href="#">Anime Explorer API Project</a>
        </div>

        <div className="footer-col">
          <h4>Connect</h4>
          <a href="mailto:your@email.com">Email</a>
          <a href="https://github.com">GitHub</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {year} Saidi Souhail. All rights reserved.</p>
        <p className="status">● Available for work</p>
      </div>

    </footer>
  );
}

export default Footer;