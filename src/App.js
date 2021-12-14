import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import './App.css';

const url = 'https://course-api.com/react-tabs-project';

function App() {

  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  }

  useEffect(() => {
    fetchJobs()

  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }


  const { company, dates, duties, title } = jobs[value];

  return (
    <div className="App">
      <h2>Experience</h2>
      <div className="job-center">
        <div className="btn-container">
          {
            jobs.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setValue(index)}
                  className='job-btn'
                >

                  {item.company}
                </button>
              )
            })
          }
        </div>
        <div className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {
            duties.map((duty, index) => {
              return (
                <div key={index} className='job-desc'>
                  <FaAngleDoubleRight />
                  <p>{duty}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
