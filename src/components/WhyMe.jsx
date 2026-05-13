import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

export default function WhyMe() {
  return (
    <section className='why'>
      <div className='why-container'>
        {/* LEWA STRONA */}

        <motion.div
          className='why-left'
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className='why-top'>DLACZEGO WARTO?</p>

          <h2>
            Skuteczność, która <br /> przynosi efekty
          </h2>

          <p className='why-desc'>
            Łączę wiedzę akademicką z praktycznym podejściem do matury, aby
            pomóc Ci zrozumieć materiał i osiągnąć dobry wynik.
          </p>

          <motion.div
            className='why-tags'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <span>Zrozumienie zamiast wkuwania</span>
            <span>Przygotowanie do matury</span>
            <span>Indywidualne podejście</span>
          </motion.div>
        </motion.div>

        {/* ŚRODEK */}

        <motion.div
          className='why-box'
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
          {/* ITEM */}

          <motion.div
            className='why-item'
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              x: 6,
            }}
            transition={{ duration: 0.3 }}
          >
            <FaCheckCircle />

            <div>
              <h4>Aktualna wiedza maturalna</h4>
              <p>Na bieżąco ze zmianami CKE</p>
            </div>
          </motion.div>

          {/* ITEM */}

          <motion.div
            className='why-item'
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              x: 6,
            }}
            transition={{ duration: 0.3 }}
          >
            <FaCheckCircle />

            <div>
              <h4>Materiały autorskie</h4>

              <p>
                Prezentacje i materiały pomocnicze pomagające uporządkować
                najważniejsze zagadnienia
              </p>
            </div>
          </motion.div>

          {/* ITEM */}

          <motion.div
            className='why-item'
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              x: 6,
            }}
            transition={{ duration: 0.3 }}
          >
            <FaCheckCircle />

            <div>
              <h4>Elastyczne godziny</h4>
              <p>Dopasowane do Twojego planu</p>
            </div>
          </motion.div>

          {/* ITEM */}

          <motion.div
            className='why-item'
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              x: 6,
            }}
            transition={{ duration: 0.3 }}
          >
            <FaCheckCircle />

            <div>
              <h4>Regularne podsumowania</h4>
              <p>Wiesz, jak idą Twoje postępy</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* CTA */}

      <motion.div
        className='cta-box'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className='cta-text'>
          <h3>Gotowy na sukces na maturze?</h3>
          <p>Zrób pierwszy krok i umów się na pierwszą lekcję!</p>
        </div>

        <motion.a
          href='#contact'
          className='cta-btn'
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          Umów pierwszą lekcję
        </motion.a>
      </motion.div>
    </section>
  );
}