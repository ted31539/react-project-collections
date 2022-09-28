import React from 'react';

const Categories = ({filterFoods}) => {
  return (
    <div className='btn-container'>
      <button 
      onClick={()=> {
        filterFoods('all')
      }}
      type='button' className='filter-btn'>
        all
      </button>
      <button 
      onClick={()=> {
        filterFoods('breakfast')
      }}
      type='button' className='filter-btn'>
        Breakfast
      </button>
      <button 
      onClick={()=> {
        filterFoods('lunch')
      }}
      type='button' className='filter-btn'>
        Lunch
      </button>
      <button 
      onClick={()=> {
        filterFoods('shakes')
      }}
      type='button' className='filter-btn'>
        Shakes
      </button>
    </div>
  );
};

export default Categories;
