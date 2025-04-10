import React from 'react';
import './styles.css';

const JobList = ({ jobs, onDelete, onUpdateStatus }) => {
  return (
    <div className="job-table-container">
      <table className="job-table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Role</th>
            <th>Application Status</th>
            <th>Date of Application</th>
            <th>Link</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job._id}>
              <td>{job.company}</td>
              <td>{job.role}</td>
              <td>
                <select
                  value={job.status}
                  onChange={(e) => onUpdateStatus(job._id, e.target.value)}
                  className="status-dropdown"
                >
                  <option>Applied</option>
                  <option>Interview</option>
                  <option>Offer</option>
                  <option>Rejected</option>
                </select>
              </td>
              <td>{job.appliedDate?.slice(0, 10)}</td>
              <td>
                <a href={job.link} target="_blank" rel="noopener noreferrer" className="job-link">
                  View
                </a>
              </td>
              <td>
                <button className="delete-btn" onClick={() => onDelete(job._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobList;
