import { useState } from 'react';
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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
      });
  };

  return (
    <section className='contact' id='contact'>
      <div className='contact-container'>
        {/* LEFT */}

        <div className='contact-left'>
          <p className='contact-top'>KONTAKT</p>

          <h2>
            Napisz do mnie <br />i umów pierwszą lekcję
          </h2>

          <p className='contact-desc'>
            Masz pytania dotyczące zajęć, matury lub dostępnych terminów? Napisz
            wiadomość - odpowiem tak szybko, jak to możliwe.
          </p>
        </div>

        {/* RIGHT */}

        <form className='contact-form' onSubmit={handleSubmit}>
          <label>Wybierz rodzaj zajęć</label>

          <CustomSelect
            options={[
              '45 minut - lekcja próbna',
              '60 minut - korepetycje 1:1',
              '60 minut - zajęcia grupowe',
            ]}
            selected={selectedPackage}
            setSelected={setSelectedPackage}
          />

          <label>Twój e-mail</label>

          <input
            type='email'
            name='email'
            placeholder='twoj@email.com'
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Wiadomość</label>

          <textarea
            name='message'
            placeholder='Napisz kilka słów o tym, czego potrzebujesz 🙂'
            rows='6'
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type='submit'>Wyślij wiadomość</button>
          {success && (
            <div className='success-message'>
              ✨ Wiadomość została wysłana! Odpowiem tak szybko, jak to możliwe.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
