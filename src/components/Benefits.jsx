import { FaGraduationCap, FaCheckCircle, FaComments } from 'react-icons/fa';
import { FaBrain, FaChartLine, FaLeaf } from 'react-icons/fa';

export default function Benefits() {
  return (
    <section className='benefits' id='offer'>
      <div className='container'>
        <p className='benefits-top'>CO ZAWIERAJĄ KOREPETYCJE?</p>
        <h2>Kompleksowe wsparcie na każdym etapie</h2>

        <div className='benefits-grid'>
          <div className='card'>
            <FaGraduationCap className='card-icon' />
            <h3>Przygotowanie do matury</h3>
            <p>Przerabiamy materiał zgodny z CKE, arkusze i typowe pułapki.</p>
          </div>

          <div className='card'>
            <FaCheckCircle className='card-icon' />
            <h3>Sprawdzanie prac</h3>
            <p>Poprawiam Twoje odpowiedzi i pokazuję jak pisać pod klucz.</p>
          </div>

          <div className='card'>
            <FaComments className='card-icon' />
            <h3>Pomoc poza zajęciami</h3>
            <p>Możesz pisać między zajęciami - odpowiadam na pytania.</p>
          </div>

          <div className='card'>
            <FaBrain className='card-icon' />
            <h3>Nauka ze zrozumieniem</h3>
            <p>Tłumaczę trudne tematy prosto i logicznie.</p>
          </div>

          <div className='card'>
            <FaChartLine className='card-icon' />
            <h3>Indywidualny plan</h3>
            <p>Plan dopasowany do Twojego poziomu i celu.</p>
          </div>

          <div className='card'>
            <FaLeaf className='card-icon' />
            <h3>Przyjazna atmosfera</h3>
            <p>Bez stresu - uczysz się spokojnie i skutecznie.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
