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

  const rejectCookies = () => {
    localStorage.setItem(COOKIE_KEY, 'rejected');
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <motion.div
      className='cookie-card'
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='cookie-icon'>🍪</div>

      <div className='cookie-content'>
        <h4>Szanujemy Twoją prywatność</h4>

        <p>
          Używamy plików cookies wyłącznie do analizy ruchu i poprawy działania
          strony.
        </p>

        <a href='#polityka-prywatnosci'>Polityka prywatności</a>
      </div>

      <div className='cookie-buttons'>
        <button className='cookie-reject' onClick={rejectCookies}>
          Odrzuć
        </button>

        <button className='cookie-accept' onClick={acceptCookies}>
          Akceptuję
        </button>
      </div>
    </motion.div>
  );
}
