import logo from '../assets/logo.webp';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id='contact' className='footer'>
      <div className='footer-container'>
        {/* LEWA STRONA */}
        <div className='footer-left'>
          <img src={logo} alt='Kod biologii' className='footer-logo' />
        </div>

        {/* ŚRODEK */}
        <div className='footer-links'>
          <h4>Nawigacja</h4>

          <a href='#strona-główna'>Strona główna</a>
          <a href='#o-mnie'>O mnie</a>
          <a href='#oferta'>Oferta</a>
          <a href='#cennik'>Cennik</a>
          <a href='#polityka-prywatnosci'>Polityka prywatności</a>
        </div>

        {/* PRAWA STRONA */}
        <div className='footer-contact'>
          <h4>Kontakt</h4>

          <div>
            <FaEnvelope />
            <span>kodbiologii@gmail.com</span>
          </div>

          <div>
            <FaPhoneAlt />
            <span>+48 666 346 150</span>
          </div>

          <div>
            <FaLinkedin />
            <a
              href='https://www.linkedin.com/in/vermenea/'
              target='_blank'
              rel='noopener noreferrer'
              className='footer-linkedin'
            >
              Natalia Zagórska
            </a>
          </div>
        </div>
      </div>

      {/* DÓŁ */}
      <div className='footer-bottom'>
        © {new Date().getFullYear()} Kod Biologii - Natalia Zagórska
      </div>
    </footer>
  );
}
