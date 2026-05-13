import { FaGraduationCap, FaCheckCircle, FaComments } from 'react-icons/fa';
import { FaBrain, FaChartLine, FaLeaf } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Benefits() {
  return (
    <section className='benefits' id='offer'>
      <div className='container'>
        <p className='benefits-top'>CO ZAWIERAJĄ KOREPETYCJE?</p>
        <h2>Kompleksowe wsparcie na każdym etapie</h2>

        <motion.div
          className='benefits-grid'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          <motion.div
            className='card'
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              y: -8,
            }}
            transition={{ duration: 0.4 }}
          >
            <FaGraduationCap className='card-icon' />
            <h3>Przygotowanie do matury</h3>
            <p>Przerabiamy materiał zgodny z CKE, arkusze i typowe pułapki.</p>
          </motion.div>

          <motion.div
            className='card'
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              y: -8,
            }}
            transition={{ duration: 0.4 }}
          >
            <FaCheckCircle className='card-icon' />
            <h3>Sprawdzanie prac</h3>
            <p>Poprawiam Twoje odpowiedzi i pokazuję jak pisać pod klucz.</p>
          </motion.div>

          <motion.div
            className='card'
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              y: -8,
            }}
            transition={{ duration: 0.4 }}
          >
            <FaComments className='card-icon' />
            <h3>Pomoc poza zajęciami</h3>
            <p>Możesz pisać między zajęciami - odpowiadam na pytania.</p>
          </motion.div>

          <motion.div
            className='card'
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              y: -8,
            }}
            transition={{ duration: 0.4 }}
          >
            <FaBrain className='card-icon' />
            <h3>Nauka ze zrozumieniem</h3>
            <p>Tłumaczę trudne tematy prosto i logicznie.</p>
          </motion.div>

          <motion.div
            className='card'
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              y: -8,
            }}
            transition={{ duration: 0.4 }}
          >
            <FaChartLine className='card-icon' />
            <h3>Indywidualny plan</h3>
            <p>Plan dopasowany do Twojego poziomu i celu.</p>
          </motion.div>

          <motion.div
            className='card'
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              y: -8,
            }}
            transition={{ duration: 0.4 }}
          >
            <FaLeaf className='card-icon' />
            <h3>Przyjazna atmosfera</h3>
            <p>Bez stresu - uczysz się spokojnie i skutecznie.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
