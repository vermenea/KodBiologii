import { useState } from 'react';
import { motion } from 'framer-motion';
import CustomSelect from './CustomSelect';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [form, setForm] = useState({
    package: '',
    email: '',
    message: '',
  });

  const [selectedPackage, setSelectedPackage] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const templateParams = {
      package: selectedPackage,
      email: form.email,
      message: form.message,
    };

    emailjs
      .send(
        'service_7a6wp38',
        'template_visoswo',
        templateParams,
        'NpYjqbGJ2O-tgpZHK',
      )
      .then(() => {
        setSuccess(true);

        setForm({
          email: '',
          message: '',
        });

        setSelectedPackage('');

        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className='contact' id='contact'>
      <div className='contact-container'>
        {/* LEFT */}

        <motion.div
          className='contact-left'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className='contact-top'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            KONTAKT
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Napisz do mnie <br />i umów pierwszą lekcję
          </motion.h2>

          <motion.p
            className='contact-desc'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Masz pytania dotyczące zajęć, matury lub dostępnych terminów? Napisz
            wiadomość - odpowiem tak szybko, jak to możliwe.
          </motion.p>
        </motion.div>

        {/* RIGHT */}

        <motion.form
          className='contact-form'
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.label
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Wybierz rodzaj zajęć
          </motion.label>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <CustomSelect
              options={[
                '45 minut - lekcja próbna',
                '60 minut - korepetycje 1:1',
                '60 minut - zajęcia grupowe',
              ]}
              selected={selectedPackage}
              setSelected={setSelectedPackage}
            />
          </motion.div>

          <motion.label
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Twój e-mail
          </motion.label>

          <motion.input
            type='email'
            name='email'
            placeholder='twoj@email.com'
            value={form.email}
            onChange={handleChange}
            required
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          />

          <motion.label
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Wiadomość
          </motion.label>

          <motion.textarea
            name='message'
            placeholder='Napisz kilka słów o tym, czego potrzebujesz 🙂'
            rows='6'
            value={form.message}
            onChange={handleChange}
            required
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
          />

          <motion.button
            type='submit'
            disabled={loading}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? 'Wysyłanie...' : 'Wyślij wiadomość'}
          </motion.button>

          <motion.p
            className='form-info'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
          >
            Dane przekazane w formularzu kontaktowym są wykorzystywane wyłącznie
            do obsługi przesłanego zapytania i kontaktu zwrotnego.
          </motion.p>

          {success && (
            <motion.div
              className='success-message'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              ✨ Wiadomość została wysłana! Odpowiem tak szybko, jak to możliwe.
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
