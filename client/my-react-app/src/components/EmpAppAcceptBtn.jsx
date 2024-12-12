import React from "react";
import axios from "axios";

const EmpAppAcceptBtn = (props) => {
  const acceptApplicant = async () => {
    try {
      const response = await axios.post('http://localhost:3001/updateStatus', {
        applicationId: props.data._id,  // Make sure the data has the _id of the application
        status: 'Approved'
      });

      if (response.data.success) {
        alert('Application approved successfully!');
        window.location.reload();
        // You may want to refresh the list or update the UI accordingly
      }
    } catch (error) {
      console.error(error);
      alert('Failed to update status');
    }
  };

  return (
    <div>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#4caf50",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          width: "100px",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#4caf50")}
        onClick={acceptApplicant}
      >
        Accept
      </button>
    </div>
  );
};

export default EmpAppAcceptBtn;
