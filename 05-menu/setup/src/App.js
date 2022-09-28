import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [foods, setFoods] = useState(items);

  const foodList = foods.map((food) => {
    const { id } = food;
    return <Menu key={id} {...food} />;
  });

  const filterFoods = (category) => {    
    const newFoods = items.filter((food) => {
      if (category === 'all') {
        return food;
      } else {
        return (food.category === category);
      }
    });   
    setFoods(newFoods);
  };

  return (
    <div className='main'>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterFoods={filterFoods} />
        <div className='section-center'>{foodList}</div>
      </section>
    </div>
  );
}

export default App;
