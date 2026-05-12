import heroImg from '../assets/herr.png';
import Features from './Features';

export default function Hero() {
  return (
    <section className='hero' id='home'>

      {/* IMAGE */}

      <div className='hero-image'>
        <img src={heroImg} alt='Natalia Zagórska' />
      </div>

      {/* CONTENT */}

      <div className='hero-content'>

        <p className='hero-top'>
          KOREPETYCJE Z BIOLOGII
        </p>

        <h1>
          Biologia <br />
          <span>która w końcu ma sens</span>
        </h1>

        <p className='hero-desc'>
          Indywidualne przygotowanie do matury,
          spokojna atmosfera i nauka ze zrozumieniem.
        </p>

        <Features />

      </div>

    </section>
  );
}