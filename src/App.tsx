import { useCallback, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Grain from "./components/Grain";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Portfolio, { ProjectModal } from "./components/Portfolio";
import Ticker from "./components/Ticker";
import { projects, type Project } from "./data/projects";
import { useRevealObserver } from "./hooks";

export default function App() {
  useRevealObserver();
  const [active, setActive] = useState<Project | null>(null);

  /* "Watch the reel" in the hero opens the first project's screening room */
  const openReel = useCallback(() => setActive(projects[0]), []);

  return (
    <div className="relative min-h-screen bg-coal-950 font-body text-bone-100">
      <Grain />
      <Nav />
      <main>
        <Hero onPlayReel={openReel} />
        <Ticker />
        <Portfolio onOpen={setActive} />
        <About />
        <Ticker
          items={[
            "Available for commissions",
            "Commercials",
            "Music videos",
            "Documentaries",
            "Short films",
            "Brand films",
          ]}
        />
        <Contact />
      </main>
      <Footer />
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </div>
  );
}
