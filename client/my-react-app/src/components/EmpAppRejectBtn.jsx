import React from "react";

const EmpAppRejectBtn = () => {
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
      >
        Reject
      </button>
    </div>
  );
};

export default EmpAppRejectBtn;
