import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <h2>Projects</h2>
        <div className="title-line"></div>
        <p>Some things I’ve built using React & APIs</p>
      </div>

      <div className="projects-grid">

        <div className="project-card">
          <div className="project-info">
            <h3>Anime E-Commerce</h3>
            <p>
              A modern responsive e-commerce web application built with React that showcases anime-themed products in a clean and interactive UI. 
              The project includes a fully functional cart system with a dedicated cart page, real-time search functionality, and a visually appealing product slider for smooth browsing.
               Designed with a focus on modern UI/UX principles, it delivers a seamless shopping experience with responsive layouts, intuitive navigation, and engaging product presentation.
            </p>

            <div className="tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>Html</span>
              <span>Css</span>
            </div>

            <div className="buttons">
              <a href="https://anime-ecommerce-gray.vercel.app" className="btn rgb-border">Live Demo</a>
              <a href="https://github.com/SaidiSouhail/anime-ecommerce" className="btn rgb-border">Code</a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-info">
            <h3> Anime Explorer (API-Based Website)</h3>
            <p>
            A dynamic web application that fetches anime data from an external API and displays it in a structured and user-friendly interface. 
            The platform allows users to browse anime content through different categories and also includes a powerful search functionality to find specific anime instantly. 
            uilt with React, it focuses on clean UI design, responsive layout, and efficient API integration to deliver real-time anime information in a smooth and interactive experience.
            </p>

            <div className="tech">
              <span>API</span>
              <span>React</span>
              <span>JavaScript</span>
              <span>Html</span>
              <span>Css</span>
            </div>

            <div className="buttons">
              <a href="https://souhail-anime-app-api.vercel.app" className="btn rgb-border">Live Demo</a>
              <a href="https://github.com/SaidiSouhail/anime-app-api" className="btn rgb-border">Code</a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-info">
            <h3> Admin Dashboard </h3>
            <p>
            A modern admin dashboard built with React, designed to manage and visualize key business data in a clean and responsive interface.
             It includes interactive charts, order tracking, product and customer management, and real-time statistics. 
             The project features a fully responsive layout, dark mode support, The goal was to create a professional, user-friendly dashboard experience
            </p>

            <div className="tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>Html</span>
              <span>Css</span>
            </div>

            <div className="buttons">
              <a href="https://souhail-admin-dashboard.vercel.app" className="btn rgb-border">Live Demo</a>
              <a href="https://github.com/SaidiSouhail/admin-dashboard" className="btn rgb-border">Code</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;