import React from "react";

const AddJobs = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <h1 style={{ marginBottom: "6px", color: "black", fontSize: "25px" }}>
          New Job Posting 
        </h1>
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
              Post
            </label>
            <input
              name="jobPost"
              type="text"
              placeholder="Enter the job post/title"
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
              Job Description
            </label>
            <textarea
              name="jobDesc"
              placeholder="Enter job description"
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
              Duration (in weeks)
            </label>
            <input
              name="time"
              type="number"
              placeholder="Enter job duration"
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
              Stipend
            </label>
            <input
              name="stpend"
              type="text"
              placeholder="Enter the applicable stipend"
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
              Crieteria
            </label>
            <input
              name="crieteris"
              type="text"
              placeholder="Enter the crieteris for applicants"
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
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJobs;
