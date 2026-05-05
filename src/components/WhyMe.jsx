import { FaCheckCircle } from 'react-icons/fa';

export default function WhyMe() {
  return (
    <section className='why'>
      <div className='why-container'>
        {/* // LEWA STRONA // */}
        <div className='why-left'>
          <p className='why-top'>DLACZEGO WARTO?</p>

          <h2>
            Skuteczność, która <br /> przynosi efekty
          </h2>

          <p className='why-desc'>
            Łączę wiedzę akademicką z praktycznym podejściem do matury, aby
            pomóc Ci zrozumieć materiał i osiągnąć dobry wynik.
          </p>

          <div className='why-tags'>
            <span>Zrozumienie zamiast wkuwania</span>
            <span>Przygotowanie do matury</span>
            <span>Indywidualne podejście</span>
          </div>
        </div>

        {/* // ŚRODEK // */}
        <div className='why-box'>
          <div className='why-item'>
            <FaCheckCircle />
            <div>
              <h4>Aktualna wiedza maturalna</h4>
              <p>Na bieżąco ze zmianami CKE</p>
            </div>
          </div>

          <div className='why-item'>
            <FaCheckCircle />
            <div>
              <h4>Materiały autorskie</h4>
              <p>Notatki, schematy i zadania</p>
            </div>
          </div>

          <div className='why-item'>
            <FaCheckCircle />
            <div>
              <h4>Elastyczne godziny</h4>
              <p>Dopasowane do Twojego planu</p>
            </div>
          </div>

          <div className='why-item'>
            <FaCheckCircle />
            <div>
              <h4>Regularne podsumowania</h4>
              <p>Wiesz, jak idą Twoje postępy</p>
            </div>
          </div>
        </div>
      </div>

      <div className='cta-box'>
        <div className='cta-text'>
          <h3>Gotowy na sukces na maturze?</h3>
          <p>Zrób pierwszy krok i umów się na pierwszą lekcję!</p>
        </div>

        <button className='cta-btn'>Umów pierwszą lekcję</button>
      </div>
    </section>
  );
}
