import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import SocialProfiles from "./sections/SocialProfiles";
import FloatingSocial from "./components/FloatingSocial";

export default function App() {
  return (
    <main className="app-bg text-white">
      <Header />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
       <FloatingSocial />
    </main>
  );
}
