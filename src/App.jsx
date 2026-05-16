import './styles.css';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const About = lazy(() => import('./components/About'));
const Footer = lazy(() => import('./components/Footer'));
const Benefits = lazy(() => import('./components/Benefits'));
const WhyMe = lazy(() => import('./components/WhyMe'));
const Pricing = lazy(() => import('./components/Pricing'));
const Contact = lazy(() => import('./components/ContactForm'));

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<div />}>
        <Benefits />
        <About />
        <WhyMe />
        <Pricing />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
