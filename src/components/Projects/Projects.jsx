import "./Projects.css";
import { useState } from "react";

function Projects() {
  const [activeTab, setActiveTab] = useState("web");

  const webProjects = [
    {
      title: "Anime E-Commerce",
      desc: "A modern responsive e-commerce web application built with React that showcases anime-themed products in a clean and interactive UI. The project includes a fully functional cart system with a dedicated cart page, real-time search functionality, and a visually appealing product slider for smooth browsing. Designed with a focus on modern UI/UX principles, it delivers a seamless shopping experience with responsive layouts, intuitive navigation, and engaging product presentation.",
      tech: ["React", "JavaScript", "CSS"],
      live: "https://anime-ecommerce-gray.vercel.app",
      code: "https://github.com/SaidiSouhail/anime-ecommerce",
    },
    {
      title: "Anime Explorer (API)",
      desc: "A dynamic web application that fetches anime data from an external API and displays it in a structured and user-friendly interface. The platform allows users to browse anime content through different categories and also includes a powerful search functionality to find specific anime instantly. uilt with React, it focuses on clean UI design, responsive layout, and efficient API integration to deliver real-time anime information in a smooth and interactive experience.",
      tech: ["React", "API", "JavaScript", "CSS"],
      live: "https://souhail-anime-app-api.vercel.app",
      code: "https://github.com/SaidiSouhail/anime-app-api",
    },
    {
      title: "Admin Dashboard",
      desc: "A modern admin dashboard built with React, designed to manage and visualize key business data in a clean and responsive interface. It includes interactive charts, order tracking, product and customer management, and real-time statistics. The project features a fully responsive layout, dark mode support, The goal was to create a professional, user-friendly dashboard experience",
      tech: ["React", "JavaScript", "CSS"],
      live: "https://souhail-admin-dashboard.vercel.app",
      code: "https://github.com/SaidiSouhail/admin-dashboard",
    },
    {
      title: "Chat App Firebase",
      desc: "A Modern Chat App built with React and Firebase Authentication, Featuring Secure Login and Registration With a Clean Responsive Design",
      tech: ["React", "JavaScript", "Firebase"],
      live: "https://chat-app-souhail.vercel.app",
      code: "https://github.com/SaidiSouhail/Chat-App",
    },
  ];

  const mobileProjects = [
    {
      title: "EcomVault - Mobile E-Commerce App",
      desc: "A mobile shopping app built with React Native, NativeWind and Expo, focused on smooth performance and modern UI/UX. It delivers a clean and responsive shopping experience with fast navigation and a polished interface. The app includes a search system for quickly finding products and a fully functional cart system to add, update, and manage items easily. Built with a strong focus on clean code and smooth user experience, it offers a refined and professional feel suitable for production-level applications.",
      tech: ["React Native", "Expo", "NativeWind"],
      live: "https://expo.dev/accounts/saidisouhail/projects/ecom-vault/builds/dd16591a-c517-4d4a-9938-8d62bb8002ee",
      code: "https://github.com/SaidiSouhail/EcomApp-ReactNative",
    },
    {
      title: "AniVault - Anime & Movie Explorer App (API)",
      desc: "A mobile anime and movies browsing application built with React Native, integrated with an external API to fetch real-time content data. The app allows users to search, explore, and view detailed information about both anime and movies through a smooth and responsive mobile experience. Designed with NativeWind for modern styling, it delivers a clean and consistent UI with fast navigation and an intuitive user experience across all screens.",
      tech: ["React Native", "Expo", "API", "NativeWind"],
      live: "https://expo.dev/accounts/saidisouhail/projects/AniVault/builds/8738b8b7-f0b0-48ec-aa27-1684109c036d",
      code: "https://github.com/SaidiSouhail/AniVault",
    },
  ];

  const projects = activeTab === "web" ? webProjects : mobileProjects;

  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <h2>Projects</h2>
        <div className="title-line"></div>
        <p>Web & Mobile applications I’ve built</p>
      </div>

      <div className="project-tabs">
        <button
          className={`tab-btn ${activeTab === "web" ? "active web" : ""}`}
          onClick={() => setActiveTab("web")}
        >
          🌐 Web Projects
        </button>

        <button
          className={`tab-btn ${activeTab === "mobile" ? "active mobile" : ""}`}
          onClick={() => setActiveTab("mobile")}
        >
          📱 Mobile Projects
        </button>
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <div className="project-card" key={i}>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="tech">
                {project.tech.map((t, index) => (
                  <span key={index}>{t}</span>
                ))}
              </div>

              <div className="buttons">
                <a href={project.live} className="btn rgb-border">
                  Live Demo
                </a>
                <a href={project.code} className="btn rgb-border">
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;