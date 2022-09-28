import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ id, title, info, isQuestionsShow, toggleQuestion }) => {
  return (
    <article className='question'>
      <header className='header'>
        <h4>{title}</h4>
        <button 
        className='btn'
        onClick={()=> {
          toggleQuestion(id);
        }}
        >
          {isQuestionsShow? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      { isQuestionsShow && <p>{info}</p>}
    </article>
  );
};

export default Question;
