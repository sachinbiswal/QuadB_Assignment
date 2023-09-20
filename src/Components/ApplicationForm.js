import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import { storeApplicationData } from '../redux/actions/applicationActions';

function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    coverLetter: '',
    resume: null, 
  });
  const localName = localStorage.getItem('name');
  const localMail = localStorage.getItem('email');

  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      resume: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(storeApplicationData(formData)); 
    navigate('/success');
  };

  return (
    <div className="application-form">
      <h2>Job Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="coverLetter">Cover Letter Note</label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleInputChange}
            rows="4"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="resume">Resume(PDF)</label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ApplicationForm;
