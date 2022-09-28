import React from 'react';
import Tour from './Tour';
const Tours = ({tours, deleteTour}) => {
  const tourList = tours.map((tour)=> {
    return (
      <Tour {...tour} key={tour.id} deleteTour={deleteTour} />
    )
  })
  return <>
  {tourList}
  </>;
  
};

export default Tours;
