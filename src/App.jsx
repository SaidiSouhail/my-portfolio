import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./components/About/About"
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;