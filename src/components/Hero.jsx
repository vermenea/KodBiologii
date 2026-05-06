import heroImg from '../assets/image.png';
import Features from './Features';

export default function Hero() {
  return (
    <section
  className='hero'
  style={{
    backgroundImage: `
      linear-gradient(
        to right,
        rgba(248,243,239,0.95) 25%,
        rgba(248,243,239,0.65) 45%,
        rgba(248,243,239,0.1) 70%
      ),
      url(${heroImg})
    `,
  }}
  id='home'
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
