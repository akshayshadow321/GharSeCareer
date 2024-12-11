import React from "react";
import { useState } from "react";

const AdminDashboard = () => {
  const [view, setView] = useState("user"); // State should be 'view', not 'type'
  let companyName = "John Doe";
  let companyLink = "#";

  const handleAccept = () => {
    console.log("accepted");
  };

  const handleReject = () => {
    alert("Rejected");
  };

  //view users
  

  const viewUser = () => {
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
            <div style={{ fontSize: "16px", textAlign: "center" }}>
              John Doe
            </div>
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

  const [showJobs, setShowJobs] = useState(false);

  // Example employer data (replace with dynamic data)
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

  
  

  const viewEmployers = () => {
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

  //emp applicants
  const viewEmpApplicants = () => {
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
                <button
                  onClick={handleAccept}
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
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#45a049")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#4caf50")
                  }
                >
                  Accept
                </button>
                <button
                  onClick={handleReject}
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
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#e53935")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#f44336")
                  }
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "220px",
          backgroundColor: "#6a1b9a", // Dark violet color for sidebar
          color: "#fff",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start", // Align buttons at the top
        }}
      >
        <h2 style={{ color: "#fff", marginBottom: "30px" }}>Admin Dashboard</h2>

        {/* Sidebar buttons */}
        <button
          onClick={() => setView("user")}
          style={{
            width: "100%",
            padding: "15px",
            backgroundColor: view === "user" ? "#8e24aa" : "#6a1b9a", // Violet shade for active button
            border: "none",
            color: "#fff",
            marginBottom: "15px",
            textAlign: "left",
            fontSize: "16px",
            borderRadius: "5px",
          }}
        >
          View Users
        </button>
        <button
          onClick={() => setView("emp")}
          style={{
            width: "100%",
            padding: "15px",
            backgroundColor: view === "emp" ? "#8e24aa" : "#6a1b9a", // Violet shade for active button
            border: "none",
            color: "#fff",
            marginBottom: "15px",
            textAlign: "left",
            fontSize: "16px",
            borderRadius: "5px",
          }}
        >
          View Employers
        </button>
        <button
          onClick={() => setView("applicants")}
          style={{
            width: "100%",
            padding: "15px",
            backgroundColor: view === "applicants" ? "#8e24aa" : "#6a1b9a", // Violet shade for active button
            border: "none",
            color: "#fff",
            textAlign: "left",
            fontSize: "16px",
            borderRadius: "5px",
          }}
        >
          View Applicants
        </button>
        <button
          style={{
            width: "100%",
            padding: "15px",
            backgroundColor: "#2c0a40",
            border: "none",
            color: "#fff",
            textAlign: "left",
            fontSize: "16px",
            borderRadius: "5px",
            marginTop: "auto", // Pushes the logout button to the bottom of the sidebar
          }}
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          backgroundColor: "#f4f4f4",
        }}
      >
        {view === "user"
          ? viewUser()
          : view === "emp"
          ? viewEmployers()
          : viewEmpApplicants()}
      </div>
    </div>
  );
};

export default AdminDashboard;
