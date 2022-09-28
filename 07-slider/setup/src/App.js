import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [reviews, setReviews] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(()=> {
    if(index > reviews.length -1 ) {
      setIndex(0);
    }
    if(index < 0 ) {
      setIndex(reviews.length -1);
    }   
  },[index, reviews])

  useEffect(()=> {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  },[index])

  

  const resviewList = reviews.map((review, reviewIndex) => {
    const { id, image, name, title, quote } = review;
    let position = 'nextSlide';
    if (reviewIndex === index) {
      position = 'activeSlide';
    }
    if (
      reviewIndex === index - 1 ||
      (index === 0 && reviewIndex === reviews.length - 1)
    ) {
      position = 'lastSlide';
    }
    return (
      <article key={id} className={position}>
        <img src={image} alt={name} className='person-img' />
        <h4>{name}</h4>
        <p className='title'>{title}</p>
        <p className='text'>{quote}</p>
        <FaQuoteRight />
      </article>
    );
  });

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className='section-center'>
        {resviewList}
        <button type='button' className='prev'
        onClick={()=> {setIndex((preIndex)=> preIndex - 1)}}
        >
          <FiChevronLeft />
        </button>
        <button type='button' className='next'
        onClick={()=> {setIndex((preIndex)=> preIndex + 1)}}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
