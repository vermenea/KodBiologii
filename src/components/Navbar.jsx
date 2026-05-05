import logo from '../assets/logo1.png';
import { LuLeaf } from 'react-icons/lu';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-container'>
        {/* LOGO */}
        <img src={logo} alt='Kod biologii' className='logo' />

        {/* MENU */}
        <div className='menu'>
          <a>Strona główna</a>
          <a>O mnie</a>
          <a>Oferta</a>
          <a>Cennik</a>
          <a>Kontakt</a>
        </div>

        {/* BUTTON */}
        <button className='btn'>
          <LuLeaf className='btn-icon' />
          Umów lekcję
        </button>
      </div>
    </nav>
  );
}
