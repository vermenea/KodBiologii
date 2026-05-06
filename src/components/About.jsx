import { FaGraduationCap, FaBookOpen } from 'react-icons/fa';
import { GiMicroscope } from 'react-icons/gi';
import aboutImg from '../assets/me1.png';

export default function AboutMe() {
  return (
    <section className='about-me'>
      <div className='about-container' id='about'>
        {/* // LEWA STRONA  // */}
        <div className='about-left'>
          <p className='about-top'>O MNIE</p>

          <h2>Kim jestem?</h2>

          <p className='about-desc'>
            Mam na imię <b>Natalia</b>, z wykształcenia jestem biologiem
            medycznym, a obecnie rozwijam się naukowo, pracując nad doktoratem z
            biologii. Kiedyś też byłam na twoim miejscu - wiem, jak trudne mogą
            być niektóre tematy i jak łatwo się zniechęcić. Na swojej drodze
            spotkałam doświadczonego korepetytora, który pomógł mi przejść przez
            materiał i zdać maturę z dobrym wynikiem, co pozwoliło mi rozwijać
            się w kierunku naukowym. Teraz chcę przekazać tę wiedzę i
            doświadczenie dalej, pomagając Tobie osiągnąć sukces na maturze i
            pokochać biologię tak jak ja!
          </p>

          <div className='about-items'>
            <div className='about-item'>
              <FaGraduationCap />
              <div>
                <h4>Magister biologii medycznej</h4>
                <p>Uniwersytet Gdański</p>
              </div>
            </div>

            <div className='about-item'>
              <FaBookOpen />
              <div>
                <h4>Doktorat w toku</h4>
                <p>Rozwijam się naukowo w biologii</p>
              </div>
            </div>

            <div className='about-item'>
              <GiMicroscope />
              <div>
                <h4>Nauka to moja codzienność</h4>
                <p>Pracuję z literaturą i badaniami</p>
              </div>
            </div>
          </div>
        </div>

        {/* // PRAWA STRONA  // */}
        <div className='about-right'>
          <img src={aboutImg} alt='Natalia' />
        </div>
      </div>
    </section>
  );
}
