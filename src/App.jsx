import './styles.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Benefits from './components/Benefits';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <About />
      <Footer />
    </>
  );
}

export default App;
