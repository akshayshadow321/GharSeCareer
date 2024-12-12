import React from "react";
import EmpAppAcceptBtn from "../components/EmpAppAcceptBtn";
import EmpAppRejectBtn from "../components/EmpAppRejectBtn";
const ViewEmpApplicants = () => {
    let companyName = "John Doe";
  let companyLink = "#";
  return (
    <>
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "15px",
              backgroundColor: "#ffffff",
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "8px",
                }}
              >
                {companyName}
              </div>
              <div>
                <a
                  href="companyLink"
                  style={{
                    color: "#6a1b9a",
                    textDecoration: "none",
                    fontSize: "16px",
                  }}
                >
                  Company Link
                </a>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <EmpAppAcceptBtn />
              <EmpAppRejectBtn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewEmpApplicants;
