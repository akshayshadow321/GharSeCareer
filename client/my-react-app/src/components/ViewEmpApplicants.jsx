import React, { useEffect, useState } from "react";
import axios from 'axios';
import EmpAppCard from "./EmpAppCard";

const ViewEmpApplicants = () => {
  const [applicants, setApplicants] = useState([]);

  // Fetch the applicants from the backend
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getApplicants');
        // Filter out applicants who have status 'approved'
        const filteredApplicants = response.data.filter(applicant => applicant.status !== 'Approved');
        setApplicants(filteredApplicants);
      } catch (err) {
        console.log(err);
      }
    };
    fetchApi();
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{ fontSize: "24px", marginBottom: "20px", color: "#6a1b9a" }}
      >
        Employer Applicants
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        {applicants.length > 0 ? (
          applicants.map((applicant) => (
            <EmpAppCard key={applicant._id} data={applicant} />
          ))
        ) : (
          <h1>No applicants found...</h1>
        )}
      </div>
    </div>
  );
};

export default ViewEmpApplicants;
