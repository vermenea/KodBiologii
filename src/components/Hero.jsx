import heroImg from '../assets/image.png';
import Features from './Features';

export default function Hero() {
  return (
    <section
      className='hero'
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div className='overlay'>
        <div className='hero-content'>
          <h1>
            Biologia <br />
            <span>zrozumiana na kod!</span>
          </h1>
          <p className='hero-subtitle'>
            KOREPETYCJE Z BIOLOGII <br />
            <span> LICEUM | MATURA</span>
          </p>
        </div>
        <Features />
      </div>
    </section>
  );
}
