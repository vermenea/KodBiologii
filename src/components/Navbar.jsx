import logo from '../assets/logo.webp';
import { LuLeaf } from 'react-icons/lu';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-container'>
        {/* LOGO */}
        <a href='#home'>
          <img src={logo} alt='Kod biologii' className='logo' />
        </a>

        {/* MENU */}
        <div className='menu'>
          <a href='#home'>Strona główna</a>
          <a href='#about'>O mnie</a>
          <a href='#offer'>Oferta</a>
          <a href='#pricing'>Cennik</a>
          <a href='#contact'>Kontakt</a>
        </div>

        {/* BUTTON */}
        <a href='#contact' className='btn'>
          <LuLeaf className='btn-icon' />
          Umów lekcję
        </a>
      </div>
    </nav>
  );
}
