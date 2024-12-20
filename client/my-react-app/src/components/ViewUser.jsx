import React from "react";

const ViewUser = () => {
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
          Users
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
            Name
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
            Contact
          </div>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              color: "#333",
              textAlign: "center",
            }}
          >
            Enrolled Course
          </div>
        </div>

        {/* Example of a user row */}
        <div
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
          <div style={{ fontSize: "16px", textAlign: "center" }}>John Doe</div>
          <div style={{ fontSize: "16px", textAlign: "center" }}>
            john.doe@example.com
          </div>
          <div style={{ fontSize: "16px", textAlign: "center" }}>
            +1234567890
          </div>
          <div style={{ fontSize: "16px", textAlign: "center" }}>
            {/* Button to delete user */}
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
      </div>
    </>
  );
};

export default ViewUser;
