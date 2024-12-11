import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:4000/jobs'); 
        setJobs(response.data); 
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setError('Failed to load jobs.'); 
      }
    };

    fetchJobs();
  }, []); 

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Available Job Opportunities</h1>

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job._id} className="bg-white rounded-lg shadow-lg p-4 flex flex-col">
              <h2 className="text-xl font-semibold mb-2">{job.company_name}</h2>
              <p className="text-gray-700">Post: {job.post}</p>
              <p className="text-gray-600 mb-4">{job.job_description}</p>
              <p className="text-gray-700">Duration: {job.duration}</p>
              <p className="text-gray-700">Salary Criteria: {job.salary_criteria}</p>

              {/* Apply Now Button */}
              <div className="flex justify-center mt-auto">
                <button className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600">
                  Apply Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No jobs available.</p>
        )}
      </div>
    </div>
  );
};

export default Jobs;
