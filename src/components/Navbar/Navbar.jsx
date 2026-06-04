import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleLogoClick = () => {
    setMenuOpen(false);

    const home = document.getElementById("home");

    if (home) {
      home.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${show ? "show" : "hide"}`}>

      <div className="logo" onClick={handleLogoClick}>
        <span>{"<"}</span>Saidi Souhail<span>{"/>"}</span>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        <li>
          <a href="#home" onClick={handleLinkClick}>Home</a>
        </li>

        <li>
          <a href="#about" onClick={handleLinkClick}>About</a>
        </li>

        <li>
          <a href="#skills" onClick={handleLinkClick}>Skills</a>
        </li>

        <li>
          <a href="#projects" onClick={handleLinkClick}>Projects</a>
        </li>

        <li className="mobile-contact">
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
        </li>
      </ul>

      <a href="#contact" className="contact-btn">
        Contact Me
      </a>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

    </nav>
  );
}

export default Navbar;