import React from "react";
import { useState } from "react";
import ViewEmpApplicants from "../components/ViewEmpApplicants";
import ViewEmployers from "../components/ViewEmployers";
import ViewUser from "../components/ViewUser";
import ViewCourse from "../components/ViewCourse";
import AddCourse from "./AddCourse";

const AdminDashboard = () => {
  const [view, setView] = useState("user"); // State should be 'view', not 'type'
  

  return (
    <>
    
    <div style={{ display: "flex", height: "100vh" }}>
      
      <div
        style={{
          position:'fixed',
          width: "220px",
          height:'100%',
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
         Users
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
         Employers
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
         Applicants
        </button>
        <button
          onClick={() => setView("course")}
          style={{
            width: "100%",
            padding: "15px",
            backgroundColor: view === "course" ? "#8e24aa" : "#6a1b9a", // Violet shade for active button
            border: "none",
            color: "#fff",
            textAlign: "left",
            fontSize: "16px",
            borderRadius: "5px",
          }}
        >
         Courses
        </button>
        <button
          onClick={() => setView("addCourse")}
          style={{
            width: "100%",
            padding: "15px",
            backgroundColor: view === "addCourse" ? "#8e24aa" : "#6a1b9a", // Violet shade for active button
            border: "none",
            color: "#fff",
            textAlign: "left",
            fontSize: "16px",
            borderRadius: "5px",
          }}
        >
         Add Course
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
          ? <ViewUser/>
          : view === "emp"
          ? <ViewEmployers/>
          : view === "course"
          ? <ViewCourse/>
          : view === "addCourse"
          ? <AddCourse/>
          : <ViewEmpApplicants/>}
      </div>
    </div>
    </>
  );
};

export default AdminDashboard;
