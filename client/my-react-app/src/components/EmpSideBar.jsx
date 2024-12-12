import React from "react";
import { useNavigate } from "react-router-dom";
const EmpSideBar = () => {
    const naviagte = useNavigate();
    const handleNewJobClick = () =>{
        naviagte('/jobCreation')
    }
    const handleSeeJobClick = () =>{
        naviagte('/empDash')
    }
    const handleJobAppClick = () =>{
        naviagte('/jobApplicants')
    }
    const handleLogoutClick = () =>{
        naviagte('/')
    }
  return (
    <div>
      <div
        style={{
          position: "fixed",
          width: "220px",
          height: "100%",
          backgroundColor: "#6a1b9a", // Dark violet color for sidebar
          color: "#fff",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start", // Align buttons at the top
        }}
      >
        <h2 style={{ color: "#fff", marginBottom: "30px" }}>Employer Dashboard</h2>

        {/* Sidebar buttons */}
        <button
          onClick={handleSeeJobClick}
          style={{
            width: "100%",
            padding: "15px",
            backgroundColor: "#6a1b9a", // Violet shade for active button
            border: "none",
            color: "#fff",
            marginBottom: "15px",
            textAlign: "left",
            fontSize: "16px",
            borderRadius: "5px",
          }}
        >
          See Job Postings
        </button>
        <button
          onClick={handleNewJobClick}
          style={{
            width: "100%",
            padding: "15px",
            backgroundColor: "#6a1b9a",
            border: "none",
            color: "#fff",
            marginBottom: "15px",
            textAlign: "left",
            fontSize: "16px",
            borderRadius: "5px",
          }}
        >
          Post Job
        </button>
        <button
          onClick={handleJobAppClick}
          style={{
            width: "100%",
            padding: "15px",
            backgroundColor: "#6a1b9a",
            border: "none",
            color: "#fff",
            textAlign: "left",
            fontSize: "16px",
            borderRadius: "5px",
          }}
        >
          Applicants
        </button>

        <button
        onClick={handleLogoutClick}
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
    </div>
  );
};

export default EmpSideBar;
