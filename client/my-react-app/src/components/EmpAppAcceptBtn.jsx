import React from "react";

const EmpAppAcceptBtn = () => {
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
      >
        Accept
      </button>
    </div>
  );
};

export default EmpAppAcceptBtn;
