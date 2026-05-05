import './styles.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Benefits from './components/Benefits';
import WhyMe from './components/WhyMe';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <About />
      <WhyMe />
      <Footer />
    </>
  );
}

export default App;
