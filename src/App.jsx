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
  const getRoute = () => {
    if (typeof window === 'undefined') return '/';
    const hash = window.location.hash;
    if (hash) return hash.replace(/^#/, '');
    return normalizePath(window.location.pathname || '/');
  };

  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const handleLocation = () => setRoute(getRoute());
    window.addEventListener('popstate', handleLocation);
    window.addEventListener('hashchange', handleLocation);
    return () => {
      window.removeEventListener('popstate', handleLocation);
      window.removeEventListener('hashchange', handleLocation);
    };
  }, []);

  const isPrivacyPage =
    route === 'polityka-prywatnosci' || route === '/polityka-prywatnosci';

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
