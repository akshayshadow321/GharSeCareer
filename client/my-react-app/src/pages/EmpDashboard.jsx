import React from "react";
import EmpSideBar from "../components/EmpSideBar";

const EmpDashboard = () => {
  const jobs = [
    {
      id: 1,
      jobTitle: "Software Developer",
      company: "TechCorp",
      duration: "6 months",
      stipend: "₹30,000/month",
    },
    {
      id: 2,
      jobTitle: "Content Writer",
      company: "ContentWorks",
      duration: "3 months",
      stipend: "₹20,000/month",
    },
    {
      id: 3,
      jobTitle: "Data Analyst",
      company: "DataGenius",
      duration: "12 months",
      stipend: "₹40,000/month",
    },
    // Add more job posts here as needed
  ];
  return (
    <div style={{ display: "flex" }}>
      <div>
        <EmpSideBar />
      </div>
      <div style={{ marginLeft: "250px", marginTop: "20px" }}>
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Job Postings</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">
                    {job.jobTitle}
                  </h2>
                  <p className="text-gray-700 mb-2">Company: {job.company}</p>
                  <p className="text-gray-600 mb-1">Duration: {job.duration}</p>
                  <p className="text-gray-700">Stipend: {job.stipend}</p>

                  <div className="flex justify-center mt-4">
                    <button className="bg-purple-500 text-white 
                    px-6 py-2 rounded-lg hover:bg-teal-600 
                    transition duration-300">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpDashboard;
