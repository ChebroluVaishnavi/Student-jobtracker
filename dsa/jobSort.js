// dsa/jobSort.js

const jobApplications = [
    { company: 'Google', role: 'SDE Intern', appliedDate: '2025-04-01' },
    { company: 'Amazon', role: 'SDE Intern', appliedDate: '2025-05-05' },
    { company: 'Microsoft', role: 'SDE Intern', appliedDate: '2025-04-30' }
  ];
  
  jobApplications.sort((a, b) => new Date(b.appliedDate) - new Date(a.appliedDate));
  
  console.log(JSON.stringify(jobApplications, null, 2));
  