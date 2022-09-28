import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState([true]);

  const getTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const deleteTour = (id) => {
    setTours((preTours) => {
      return preTours.filter((tour) => tour.id !== id);
    });
  };

  useEffect(() => {
    getTours();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      <section>
        {tours.length && (
          <div className='title'>
            <h2>Our Tours</h2>
            <div className='underline'></div>
            <Tours tours={tours} deleteTour={deleteTour} />
          </div>
        )}
        {!tours.length && (
          <div className='title'>
            <h2>No Tours Left</h2>
            <button type='bytton' className='btn' onClick={getTours}>
              Refresh
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
