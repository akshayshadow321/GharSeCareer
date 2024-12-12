import React from "react";
import EmpSideBar from "./EmpSideBar";

const JobApplicants = () => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <EmpSideBar />
      </div>
      <div style={{ marginLeft: "240px", marginTop: "20px" }}>
        <div
          style={{
            padding: "30px",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
            width: "80%",
            width: "1000px",
            margin: "40px auto",
        
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              marginBottom: "25px",
              color: "#6a1b9a",
              fontWeight: "600",
            }}
          >
            Employer Applicants
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #ddd",
              paddingBottom: "15px",
              marginBottom: "15px",
            }}
          >
            <div
              style={{
                fontSize: "16px",
                fontWeight: "500",
                color: "#333",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>Applicants Name</div>
              <div style={{ marginTop: "5px", color: "#777" }}>
                Applicants Email ID
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
              <button
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#4caf50",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "14px",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#45a049")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#4caf50")}
              >
                Chat Now
              </button>

              <button
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#f44336",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "14px",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#e53935")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#f44336")}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplicants;
