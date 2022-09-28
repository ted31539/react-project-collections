import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [company, setCompany] = useState();

  const selectComapny = (company) => {
    setCompany(company);
  };

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
      setCompany(data[0]);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const buttonList = jobs.map((job) => {
    return (
      <button
        type='button'
        key={job.id}
        className={
          job.company === company?.company
            ? 'active-btn job-btn'
            : 'job-btn false'
        }
        onClick={() => {
          selectComapny(job);
        }}>
        {job.company}
      </button>
    );
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <section className='section'>
      <div className='title'>
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>{buttonList}</div>
        <article className='job-info'>
          <h3>{company?.title}</h3>
          <h4>{company.company}</h4>
          <p className='job-date'>{company.dates}</p>
          {company.duties.map((duty, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
      <button type='button' className='btn'>
        more info
      </button>
    </section>
  );
}

export default App;
