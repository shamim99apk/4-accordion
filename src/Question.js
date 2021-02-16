import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ info, title }) => {
  const [showInfo, setShowInfo] = useState(true);
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        {/* when button click we see the negative*/}
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {/* when negative call we see info */}
      {!showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
