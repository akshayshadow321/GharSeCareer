import React from 'react'
import { Controller } from 'react-hook-form'

function AddCourse() {
  return (
    <div
      style={{
        
        backgroundColor: "violet",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
        padding: "20px",
      }}
    >

      <h1 style={{ marginBottom: "6px",marginTop:'20px', color: "white" ,fontSize:"25px"}}>New Course Details</h1>
      <form
        style={{
          width: "100%",
          maxWidth: "500px",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              textAlign: "left",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            Course Name
          </label>
          <input
            name="courseName"
            type="text"
            placeholder="Enter course name"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "5px",
              border: "1px solid #ddd",
              fontSize: "16px",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              textAlign: "left",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            Description
          </label>
          <textarea
            name="desc"
            placeholder="Enter course description"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "5px",
              border: "1px solid #ddd",
              fontSize: "16px",
              resize: "vertical",
              minHeight: "100px",
            }}
          ></textarea>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              textAlign: "left",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            Duration (in hours)
          </label>
          <input
            name="time"
            type="number"
            placeholder="Enter course duration"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "5px",
              border: "1px solid #ddd",
              fontSize: "16px",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              textAlign: "left",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            Mentor Name
          </label>
          <input
            name="mentor"
            type="text"
            placeholder="Enter mentor's name"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "5px",
              border: "1px solid #ddd",
              fontSize: "16px",
            }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
            <label
                style={{
                display: "block",
                textAlign: "left",
                marginBottom: "8px",
                fontWeight: "bold",
                }}
            >
                Image
            </label>
            <input
                name="courseImage"
                type="file"
                accept="image/*"
                placeholder="Upload your image here"
                style={{
                width: "100%",
                padding: "12px",
                borderRadius: "5px",
                border: "1px solid #ddd",
                fontSize: "16px",
                }}
            />
            </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#7a2d96",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            fontWeight: "bold",
            color: "#fff",
            cursor: "pointer",
            marginTop: "20px",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#5c1b7d")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#7a2d96")}
        >
          Submit Course
        </button>
      </form>
    </div>
  )
}

export default AddCourse