import { FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Pricing() {
  return (
    <section className='pricing' id='pricing'>
      <div className='container'>
        {/* TOP */}
        <div className='pricing-header'>
          <p className='pricing-top'>CENNIK</p>

          <h2>
            Wybierz formę współpracy <br />
            dopasowaną do siebie
          </h2>

          <p className='pricing-desc'>
            Kameralne zajęcia online z biologii dla licealistów przygotowujących
            się do matury.
          </p>
        </div>

        {/* KARTY */}
        <motion.div
          className='pricing-grid'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {/* KARTA 1 */}
          <motion.div
            className='price-card'
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className='price-label'>Lekcja próbna</div>

            <h3>45 minut</h3>

            <div className='price'>80 zł</div>

            <p className='price-small'>
              Poznaj mój sposób tłumaczenia i zobacz, czy taka forma nauki Ci
              odpowiada.
            </p>

            <div className='price-features'>
              <div>
                <FaCheck /> konsultacja poziomu
              </div>
              <div>
                <FaCheck /> omówienie celu
              </div>
            </div>
          </motion.div>

          {/* KARTA 2 */}
          <motion.div
            className='price-card featured'
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className='best-badge'>Najczęściej wybierane</div>

            <div className='price-label dark'>Korepetycje 1:1</div>

            <h3>60 minut</h3>

            <div className='price'>100 zł</div>

            <p className='price-small'>
              Regularne zajęcia dopasowane do poziomu, matury i aktualnych
              potrzeb.
            </p>

            <div className='price-features'>
              <div>
                <FaCheck /> indywidualny plan nauki
              </div>
              <div>
                <FaCheck /> sprawdzanie zadań
              </div>
              <div>
                <FaCheck /> materiały PDF
              </div>
              <div>
                <FaCheck /> kontakt między zajęciami
              </div>
            </div>
          </motion.div>

          {/* KARTA 3 */}
          <motion.div
            className='price-card'
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className='price-label'>Zajęcia grupowe</div>

            <h3>60 minut</h3>

            <div className='price'>50 zł/osoba</div>

            <p className='price-small'>
              Nauka w grupie 2-4 osób, idealna dla przyjaciół.
            </p>

            <div className='price-features'>
              <div>
                <FaCheck /> wspólne przygotowanie do matury
              </div>
              <div>
                <FaCheck /> sprawdzanie zadań
              </div>
              <div>
                <FaCheck /> materiały PDF
              </div>
              <div>
                <FaCheck /> kontakt między zajęciami
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
