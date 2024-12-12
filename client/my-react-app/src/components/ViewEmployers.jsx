import React from "react";

const employers = [
  {
    companyName: "Tech Solutions",
    address: "123 Tech Street, Silicon Valley, CA",
    email: "contact@techsolutions.com",
  },
  {
    companyName: "Innovative Inc.",
    address: "456 Innovation Ave, New York, NY",
    email: "info@innovativeinc.com",
  },
];
const ViewEmployers = () => {
  return (
    <>
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8f8f8",
          borderRadius: "8px",
          maxWidth: "900px",
          margin: "0 auto",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            marginBottom: "20px",
            textAlign: "center",
            color: "#6a1b9a",
          }}
        >
          Employers
        </h1>

        {/* Header Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            padding: "15px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              color: "#333",
              textAlign: "center",
            }}
          >
            Company Name
          </div>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              color: "#333",
              textAlign: "center",
            }}
          >
            Address
          </div>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              color: "#333",
              textAlign: "center",
            }}
          >
            Email
          </div>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              color: "#333",
              textAlign: "center",
            }}
          >
            Actions
          </div>
        </div>

        {/* Example Employer Row */}
        {employers.map((employer, index) => (
          <div
            key={index}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              padding: "15px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              marginBottom: "10px",
            }}
          >
            <div style={{ fontSize: "16px", textAlign: "center" }}>
              {employer.companyName}
            </div>
            <div style={{ fontSize: "16px", textAlign: "center" }}>
              {employer.address}
            </div>
            <div style={{ fontSize: "16px", textAlign: "center" }}>
              {employer.email}
            </div>
            <div style={{ fontSize: "16px", textAlign: "center" }}>
              {/* Button to delete comp */}
              <button
                style={{
                  padding: "8px 15px",
                  backgroundColor: "#6a1b9a",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ViewEmployers;
