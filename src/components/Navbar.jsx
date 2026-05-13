import { motion } from 'framer-motion';
import logo from '../assets/logo.webp';
import { LuLeaf } from 'react-icons/lu';

export default function Navbar() {
  return (
    <motion.nav
      className='navbar'
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: 'easeOut',
      }}
    >
      <div className='nav-container'>
        {/* LOGO */}

        <motion.a
          href='#home'
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.98,
          }}
        >
          <img src={logo} alt='Kod biologii' className='logo' />
        </motion.a>

        {/* MENU */}

        <div className='menu'>
          <motion.a
            href='#home'
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Strona główna
          </motion.a>

          <motion.a
            href='#about'
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            O mnie
          </motion.a>

          <motion.a
            href='#offer'
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Oferta
          </motion.a>

          <motion.a
            href='#pricing'
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Cennik
          </motion.a>

          <motion.a
            href='#contact'
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Kontakt
          </motion.a>
        </div>

        {/* BUTTON */}

        <motion.a
          href='#contact'
          className='btn'
          whileHover={{
            scale: 1.04,
            y: -2,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          <LuLeaf className='btn-icon' />
          Umów lekcję
        </motion.a>
      </div>
    </motion.nav>
  );
}