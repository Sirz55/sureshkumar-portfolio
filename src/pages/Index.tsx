import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div style={{ background: "#0a0a0f", minHeight: "100vh" }}>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
};

export default Index;