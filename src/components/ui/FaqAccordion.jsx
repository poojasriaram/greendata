import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqList } from '../../data/partnersData';

export default function FaqAccordion({ items = faqList }) {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="faq-container">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;

        return (
          <div className="faq-item" key={idx}>
            <button
              className="faq-question"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <ChevronDown
                size={18}
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'none',
                  transition: 'transform var(--transition-normal)'
                }}
              />
            </button>
            {isOpen && (
              <div className="faq-answer open" style={{ maxHeight: '400px' }}>
                <div className="faq-answer-inner">
                  {item.answer}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
