import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const COOKIE_KEY = 'kodbiologii_cookie_consent';
const GA_MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

function loadGoogleAnalytics() {
  if (typeof window === 'undefined') return;
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') return;
  if (window.gtag) return;

  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  const inlineScript = document.createElement('script');
  inlineScript.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: true });`;
  document.head.appendChild(inlineScript);
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    const consent = localStorage.getItem(COOKIE_KEY);
    return consent ? false : true;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const consent = localStorage.getItem(COOKIE_KEY);
    if (consent === 'accepted') {
      loadGoogleAnalytics();
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    loadGoogleAnalytics();
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <motion.div
      className='cookie-banner'
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className='cookie-banner-content'>
        <div>
          <p className='cookie-banner-title'>Cookies</p>
          <p className='cookie-banner-text'>
            Ta strona używa niewielkiej ilości plików cookies do analizy ruchu.
          </p>
        </div>

        <div className='cookie-banner-actions'>
          <a href='/privacy-policy' className='cookie-banner-link'>
            Polityka prywatności
          </a>
          <button
            className='cookie-banner-button accept'
            onClick={acceptCookies}
          >
            Akceptuję
          </button>
        </div>
      </div>
    </motion.div>
  );
}
