import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [colors, setColors] = useState(new Values('#f15025').all(10));
  const [error, setError] = useState(false);
  const [value, setValue] = useState('');

  const handleSubmit = (e)=> {
    e.preventDefault();
    try {
      setError(false);
      setColors(new Values(value).all(10));
    }
    catch(err) {
      setError(true);
      console.log(err);
    }
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const colorList = colors.map((color, index)=> {    
    return (
      <SingleColor key={index} {...color} index={index} hex={color.hex}  />
    );
  })

  return (
    <>
      <section className='container'>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            className={error ? 'error' : null}
            type='text'
            placeholder='#f15025'
            value={value}
            onChange={handleChange}
          />
          <button type='submit' className='btn'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {colorList}
      </section>
    </>
  );
}

export default App;
