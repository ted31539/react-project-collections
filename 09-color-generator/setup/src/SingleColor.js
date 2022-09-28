import React, { useState, useEffect } from 'react';

const SingleColor = ({ weight, hex, rgb, index }) => {
  const [alert, setAlert] = useState(false);
  const rgbValue = `rgb(${rgb.join()})`;

  useEffect(()=> {
    navigator.clipboard.writeText('#' + hex);

    const timeout = setTimeout(()=> {
      setAlert(false);
    }, 4000);
    return ()=> {
      clearTimeout(timeout);
    }
  }, [alert])

  return (
    <article
      onClick={() => {
        setAlert(true);
      }}
      className={`color ${index > 10 ? 'color-light' : null}`}
      style={{ background: rgbValue }}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{'#' + hex}</p>
      {alert && <p className='alert'>COPIED TO CLIPBOARD</p>}
    </article>
  );
};

export default SingleColor;
