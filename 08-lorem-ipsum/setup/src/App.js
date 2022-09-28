import React, { useState } from 'react';
import data from './data';
function App() {
  const [text, setText] = useState();
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    if (count < 0) {
      return setCount(0);
    }
    setCount(e.target.value);
  };

  const generateText = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if(count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };

  return (
    <section className='section-center'>
      <h3>TIRED OF BORING LOREM IPSUM?</h3>
      <form onSubmit={generateText} className='lorem-form'>
        <label htmlFor='amount'>Paragraphs:</label>
        <input
          type='number'
          id='amount'
          value={count}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        <p>{text}</p>
      </article>
    </section>
  );
}

export default App;
