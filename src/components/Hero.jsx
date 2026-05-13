import { motion } from 'framer-motion';
import heroImg from '../assets/hero.webp';
import Features from './Features';

export default function Hero() {
  return (
    <section className='hero' id='home'>
      {/* IMAGE */}

      <motion.div
        className='hero-image'
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={heroImg} alt='Natalia Zagórska' />
      </motion.div>

      {/* CONTENT */}

      <motion.div
        className='hero-content'
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
      >
        <motion.p
          className='hero-top'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          KOREPETYCJE Z BIOLOGII
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Biologia <br />
          <span>która w końcu ma sens</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Features />
        </motion.div>
      </motion.div>
    </section>
  );
}