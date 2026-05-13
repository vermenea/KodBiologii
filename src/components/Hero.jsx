import heroImg from '../assets/IMG_0010.jpg';
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
        <p className='hero-top'>KOREPETYCJE Z BIOLOGII</p>

        <h1>
          Biologia <br />
          <span>która w końcu ma sens</span>
        </h1>

        <Features />
      </div>
    </section>
  );
}
