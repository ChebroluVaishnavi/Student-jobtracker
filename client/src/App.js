import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobForm from './Components/Jobform';
import JobList from './Components/Joblist';
import './App.css'
const API_URL = 'https://student-jobtracker-backend.onrender.com';

const App = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const res = await axios.get(`${API_URL}/jobs`);
    setJobs(res.data);
  };

  const addJob = async (jobData) => {
    await axios.post(`${API_URL}/jobs`, jobData);
    fetchJobs();
  };

  const deleteJob = async (id) => {
    await axios.delete(`${API_URL}/jobs/${id}`);
    fetchJobs();
  };

  const updateStatus = async (id, newStatus) => {
    await axios.put(`${API_URL}/jobs/${id}`, { status: newStatus });
    fetchJobs();
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="App">
      <h1>👨‍🎓 STUDENT JOB TRACKER</h1>
      <JobForm onAdd={addJob} />
      <JobList jobs={jobs} onDelete={deleteJob} onUpdateStatus={updateStatus} />
    </div>
  );
};

export default App;