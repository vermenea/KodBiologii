import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

export default function CustomSelect({
  options,
  selected,
  setSelected,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className='custom-select'>
      {/* SELECT BUTTON */}

      <button
        type='button'
        className='select-btn'
        onClick={() => setOpen(!open)}
      >
        <span>
          {selected || 'Wybierz opcję'}
        </span>

        <FaChevronDown
          className={`select-arrow ${open ? 'rotate' : ''}`}
        />
      </button>

      {/* OPTIONS */}

      <AnimatePresence>
        {open && (
          <motion.div
            className='select-dropdown'
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {options.map((option) => (
              <div
                key={option}
                className='select-option'
                onClick={() => {
                  setSelected(option);
                  setOpen(false);
                }}
              >
                {option}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}