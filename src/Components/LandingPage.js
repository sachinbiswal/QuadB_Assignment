import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function LandingPage() {
  const [language, setLanguage] = useState('');
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (language) {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `https://jobs-xm1n.onrender.com/jobs?language=${language}`
        );
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching job listings:', error);
        setJobs([]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className='search'>
      <h1>Job Search</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Programming Language:
          <input
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            placeholder="Enter a language (e.g., JavaScript)"
            required
          />
        </label>
        <button type="submit">Search</button>
      </form>

      {isLoading && <p>Loading...</p>}

      {!isLoading && jobs.length > 0 && (
        <div>
          <h2>Job Listings for {language}</h2>
          <div className='job-list'>
            {jobs.map((job) => (
              <Link
                to={`/job/${job.id}`}
                key={job.id}
                className='job-card' 
              >
                <img src={job.logo} alt={`${job.name} Logo`} />
                <div className='job-details'>
                  <h3>{job.name}</h3>
                  <p>Language: {job.language}</p>
                  <p>Salary: {job.salary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {!isLoading && jobs.length === 0 && (
        <div>
          <p>No job listings found for {language}.</p>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
