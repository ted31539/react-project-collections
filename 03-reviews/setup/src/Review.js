import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { image, name, job, text } = people[index];

  const checkNum = (num) => {
    if (num < 0) {
      return people.length - 1;
    }
    if (num > people.length - 1) {
      return 0;
    }
    return num
  };

  const prePerson = () => {
    setIndex((preIndex) => {
      let newIndex = preIndex - 1;
      return checkNum(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((preIndex) => {
      let newIndex = preIndex + 1;
      return checkNum(newIndex);
    });
  };

  const randomPeople = () => {
    const randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === index) {
      setIndex((preIndex) => {
        let newIndex = randomIndex + 1;
        return checkNum(newIndex);
      });
      return;
    }
    setIndex((preIndex) => {      
      return checkNum(randomIndex);
    });
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img className='person-img' src={image} alt='' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button type='button' className='prev-btn' onClick={prePerson}>
          <FaChevronLeft />
        </button>
        <button type='button' className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randomPeople} className='random-btn'>
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
