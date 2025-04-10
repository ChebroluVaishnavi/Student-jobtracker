import React, { useState } from 'react';
import './styles.css'; // Make sure you import your CSS file

const JobForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    status: 'Applied',
    appliedDate: '',
    link: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onAdd(formData);
    setFormData({
      company: '',
      role: '',
      status: 'Applied',
      appliedDate: '',
      link: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="job-form-container">
      <h2>Add a Job Application</h2>
      <input
        name="company"
        placeholder="Company"
        value={formData.company}
        onChange={handleChange}
        className="job-input"
        required
      />
      <input
        name="role"
        placeholder="Role"
        value={formData.role}
        onChange={handleChange}
        className="job-input"
        required
      />
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="job-select"
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <input
        type="date"
        name="appliedDate"
        value={formData.appliedDate}
        onChange={handleChange}
        className="job-input"
        required
      />
      <input
        name="link"
        placeholder="Job Link"
        value={formData.link}
        onChange={handleChange}
        className="job-input"
      />
      <button type="submit" className="job-submit-btn">Add Job</button>
    </form>
  );
};

export default JobForm;
