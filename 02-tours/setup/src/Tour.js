import React, { useState } from 'react';

const Tour = ({ id, image, info, name, price, deleteTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            type='button'
            onClick={() => {
              setReadMore((preReadMore) => !preReadMore);
            }}>
            {readMore ? 'Read Less' : 'Read More'}
          </button>
        </p>
        <button
          type='button'
          className='delete-btn'
          onClick={() => {
            deleteTour(id);
          }}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
