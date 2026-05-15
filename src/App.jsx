import './styles.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Benefits from './components/Benefits';
import WhyMe from './components/WhyMe';
import Pricing from './components/Pricing';
import Contact from './components/ContactForm';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <About />
      <WhyMe />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
