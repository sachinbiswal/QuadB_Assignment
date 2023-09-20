import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`https://jobs-xm1n.onrender.com/jobs?id=${id}`);
        console.log('API response:', response.data[0]); 
        setJob(response.data[0]);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching job details:', error);
        setIsLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!job) {
    return <p>Job not found.</p>;
  }

  return (
    <div className="job-card1">
      <img src={job.logo} alt={`${job.company} Logo`} />
      <div className="job-details">
        <h2>{job.name}</h2>
        <p><b>Salary:</b> {job.salary}</p>
        <p><b>City:</b>{job.city}</p>
        <p><b>Country:</b> {job.country}</p>
        <p><b>Language:</b> {job.language}</p>
        <p><b>Author:</b>{job.author}</p>
        <Link to="/apply" ><button className="apply-btn">Apply</button></Link>
      </div>
    </div>
  );
}

export default JobDetail;
