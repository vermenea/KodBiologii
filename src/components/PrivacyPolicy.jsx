import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <section className='privacy-policy' id='polityka-prywatnosci'>
      <div className='privacy-container'>
        <motion.div
          className='privacy-header'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className='privacy-top'>POLITYKA PRYWATNOŚCI</p>
          <h2>Polityka prywatności</h2>
        </motion.div>

        <motion.div
          className='privacy-section'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h3>1. Administrator danych osobowych</h3>
          <p>
            Administratorem danych osobowych jest Natalia Zagórska, prowadząca
            serwis „Kod Biologii”, kontakt:{' '}
            <a href='mailto:kodbiologii@gmail.com'>kodbiologii@gmail.com</a>{' '}
            (dalej: „Administrator”).
          </p>
        </motion.div>

        <motion.div
          className='privacy-section'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <h3>2. Zakres i cel przetwarzania danych</h3>
          <p>Administrator przetwarza dane osobowe użytkowników w celu:</p>
          <ul>
            <li>
              udzielenia odpowiedzi na wiadomości przesłane za pośrednictwem
              formularza kontaktowego,
            </li>
            <li>kontaktu w sprawie korepetycji z biologii online,</li>
            <li>świadczenia usług edukacyjnych,</li>
            <li>prowadzenia statystyk i analiz ruchu na stronie,</li>
            <li>zapewnienia bezpieczeństwa strony internetowej,</li>
            <li>dochodzenia lub obrony przed ewentualnymi roszczeniami.</li>
          </ul>
          <p>Przetwarzane mogą być następujące dane:</p>
          <ul>
            <li>imię i nazwisko,</li>
            <li>adres e-mail,</li>
            <li>numer telefonu (jeżeli zostanie podany),</li>
            <li>treść wiadomości przesłanej przez formularz kontaktowy,</li>
            <li>
              adres IP oraz dane dotyczące korzystania ze strony internetowej.
            </li>
          </ul>
        </motion.div>

        <motion.div
          className='privacy-section'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <h3>3. Podstawa prawna przetwarzania danych</h3>
          <p>Dane osobowe są przetwarzane na podstawie:</p>
          <ul>
            <li>art. 6 ust. 1 lit. a RODO – zgody użytkownika,</li>
            <li>
              art. 6 ust. 1 lit. b RODO – podjęcia działań na żądanie osoby
              przed zawarciem umowy,
            </li>
            <li>
              art. 6 ust. 1 lit. f RODO – prawnie uzasadnionego interesu
              Administratora, obejmującego komunikację z użytkownikami, analizę
              ruchu na stronie oraz ochronę przed roszczeniami.
            </li>
          </ul>
        </motion.div>

        <motion.div
          className='privacy-section'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <h3>4. Formularz kontaktowy</h3>
          <p>
            Korzystanie z formularza kontaktowego jest dobrowolne. Dane podane
            przez użytkownika za pośrednictwem formularza są wykorzystywane
            wyłącznie w celu obsługi zapytania oraz kontaktu z użytkownikiem.
          </p>
        </motion.div>

        <motion.div
          className='privacy-section'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <h3>5. Google Analytics</h3>
          <p>
            Strona korzysta z Google Analytics – narzędzia analitycznego
            dostarczanego przez Google, które pozwala analizować sposób
            korzystania ze strony internetowej.
          </p>
          <p>
            Google Analytics wykorzystuje pliki cookies do zbierania informacji
            o aktywności użytkowników. Dane te pomagają zrozumieć, jak
            użytkownicy korzystają ze strony, oraz ulepszać jej działanie.
          </p>
          <p>
            Narzędzia analityczne są uruchamiane wyłącznie po uzyskaniu zgody
            użytkownika za pośrednictwem banera cookies.
          </p>
        </motion.div>

        <motion.div
          className='privacy-section'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          <h3>6. Odbiorcy danych</h3>
          <p>
            Dane mogą być przekazywane podmiotom wspierającym funkcjonowanie
            strony, w szczególności:
          </p>
          <ul>
            <li>Vercel – dostawcy usług hostingowych,</li>
            <li>Hostinger – dostawcy usług związanych z obsługą domeny,</li>
            <li>Google – w zakresie usług Google Analytics,</li>
            <li>
              podmiotom świadczącym usługi informatyczne i techniczne niezbędne
              do działania strony.
            </li>
          </ul>
        </motion.div>

        <motion.div
          className='privacy-section'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          <h3>7. Okres przechowywania danych</h3>
          <p>
            Dane przesłane za pośrednictwem formularza kontaktowego będą
            przechowywane przez okres niezbędny do prowadzenia korespondencji
            oraz realizacji celu kontaktu, a następnie do czasu przedawnienia
            ewentualnych roszczeń.
          </p>
          <p>
            Dane analityczne będą przechowywane zgodnie z zasadami i
            ustawieniami Google Analytics.
          </p>
        </motion.div>

        <motion.div
          className='privacy-section'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.85 }}
        >
          <h3>8. Prawa użytkownika</h3>
          <p>Każdej osobie, której dane dotyczą, przysługuje prawo do:</p>
          <ul>
            <li>dostępu do swoich danych,</li>
            <li>sprostowania danych,</li>
            <li>usunięcia danych,</li>
            <li>ograniczenia przetwarzania,</li>
            <li>przenoszenia danych,</li>
            <li>wniesienia sprzeciwu wobec przetwarzania,</li>
            <li>cofnięcia zgody w dowolnym momencie,</li>
            <li>
              wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.
            </li>
          </ul>
        </motion.div>

        <motion.div
          className='privacy-section'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.95 }}
        >
          <h3>9. Pliki cookies</h3>
          <p>
            Strona wykorzystuje pliki cookies niezbędne do jej prawidłowego
            funkcjonowania oraz – po uzyskaniu zgody użytkownika – pliki
            analityczne.
          </p>
          <p>
            Podczas pierwszej wizyty na stronie użytkownik może zarządzać
            zgodami dotyczącymi plików cookies za pomocą wyświetlanego banera
            cookies.
          </p>
          <p>
            Użytkownik może również zmienić ustawienia dotyczące cookies w
            swojej przeglądarce internetowej.
          </p>
        </motion.div>

        <motion.div
          className='privacy-section'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.05 }}
        >
          <h3>10. Bezpieczeństwo danych</h3>
          <p>
            Administrator stosuje odpowiednie środki techniczne i organizacyjne
            mające na celu ochronę danych osobowych przed nieuprawnionym
            dostępem, utratą, zniszczeniem lub ujawnieniem.
          </p>
        </motion.div>

        <motion.div
          className='privacy-section'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.15 }}
        >
          <h3>11. Kontakt</h3>
          <p>
            W sprawach związanych z ochroną danych osobowych można skontaktować
            się z Administratorem pod adresem:
          </p>
          <p>
            <a href='mailto:kodbiologii@gmail.com'>kodbiologii@gmail.com</a>
          </p>
          <a href='/' className='privacy-back'>
            Wróć do strony głównej
          </a>
        </motion.div>
      </div>
    </section>
  );
}
