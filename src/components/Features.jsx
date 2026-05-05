import { LuLeaf } from 'react-icons/lu';
import { FaBrain, FaHeart } from 'react-icons/fa';

export default function Features() {
  return (
    <div className='features'>
      <div className='feature'>
        <div className='icon'>
          <LuLeaf />
        </div>
        <p>
          Indywidualne
          <br />
          podejście
        </p>
      </div>

      <div className='feature'>
        <div className='icon'>
          <FaBrain />
        </div>
        <p>
          Skuteczne
          <br />
          metody nauki
        </p>
      </div>

      <div className='feature'>
        <div className='icon'>
          <FaHeart />
        </div>
        <p>
          Przyjazna
          <br />
          atmosfera
        </p>
      </div>
    </div>
  );
}
