import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import StatsStrip from './components/StatsStrip';
import TechStack from './components/TechStack';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  return (
    <div className="relative bg-black min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Portfolio />
        <StatsStrip />
        <TechStack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
