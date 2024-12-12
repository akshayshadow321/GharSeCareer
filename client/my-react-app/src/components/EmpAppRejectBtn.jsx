import React from "react";
import axios from "axios";

const EmpAppRejectBtn = (props ) => {
  // Function to handle rejection of the application
  const rejectApplicant = async () => {
    try {
      const response = await axios.post('http://localhost:3001/updateStatus', {
        applicationId: props.data._id,  // Pass the applicationId as a prop
        status: 'Rejected'
      });

      if (response.data.success) {
        alert('Application rejected successfully!');
        // Optionally, you can trigger a UI update here to reflect the rejected status.
        // For example, you could call a callback function to re-fetch the applicants or update the UI.
      }
    } catch (error) {
      console.error('Error rejecting application:', error);
      alert('Failed to reject application');
    }
  };

  return (
    <div>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#f44336",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          width: "100px",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#e53935")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#f44336")}
        onClick={rejectApplicant} // Call the rejectApplicant function when clicked
      >
        Reject
      </button>
    </div>
  );
};

export default EmpAppRejectBtn;
