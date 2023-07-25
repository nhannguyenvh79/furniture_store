import React from 'react';
import './accordation.css'

export default function Accordation ({faq,onToggle, active }) {
  const {question, answer} = faq;

  return (
    <li className={`accordation-item ${active ? "active" : ""}`}>
      <button className='question'onClick={onToggle}>{question}
        <span className='control'>{active ? '-' : '+'}</span>
      </button>

      <div className={`answer-wrapper ${active ? "open" : ""}`}> 
        <div className="answer">{answer}</div>
      </div>
    </li>
  );
};