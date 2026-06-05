import './styles.css';
import { Suspense, lazy, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CookieBanner from './components/CookieBanner';

const About = lazy(() => import('./components/About'));
const Footer = lazy(() => import('./components/Footer'));
const Benefits = lazy(() => import('./components/Benefits'));
const WhyMe = lazy(() => import('./components/WhyMe'));
const Pricing = lazy(() => import('./components/Pricing'));
const Contact = lazy(() => import('./components/ContactForm'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));

function App() {
  const normalizePath = (path) => path.replace(/\/+$/, '') || '/';
  const [route, setRoute] = useState(() =>
    normalizePath(window.location.pathname || '/'),
  );

  useEffect(() => {
    const handlePopState = () =>
      setRoute(normalizePath(window.location.pathname || '/'));
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const isPrivacyPage = route === '/privacy-policy';

  return (
    <>
      <Navbar />
      <Suspense fallback={<div />}>
        {isPrivacyPage ? (
          <PrivacyPolicy />
        ) : (
          <>
            <Hero />
            <Benefits />
            <About />
            <WhyMe />
            <Pricing />
            <Contact />
          </>
        )}
        <Footer />
      </Suspense>
      <CookieBanner />
    </>
  );
}

export default App;
