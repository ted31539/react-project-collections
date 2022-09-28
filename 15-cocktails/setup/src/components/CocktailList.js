import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';


const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext();
  const cocktailList = cocktails.map((item)=> {
    return (
      <Cocktail {...item} key={item.id} />
    )
  })

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <h2 className='section-title'>
        No Cocktails Matched Your Search Criteria
      </h2>
    );
  }
  return (
    <section className='section'>
      <h2 className='section-title'>Cocktails</h2>
      <div className='cocktails-center'>
        {cocktailList}
      </div>
    </section>
  );
};

export default CocktailList;
