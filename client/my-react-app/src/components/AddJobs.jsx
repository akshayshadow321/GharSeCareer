import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import EmpSideBar from "./EmpSideBar";

const AddJobs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function to handle form submission
  const onSubmit = async (data) => {
    try {
      // Assuming the employer's email is stored in localStorage
      const email = localStorage.getItem("email");

      // Prepare the data to be sent to the backend
      const jobData = {
        email: email, // Send the employer's email
        post: data.jobPost, // Job post title
        jd: data.jobDesc, // Job description
        duration: data.time, // Job duration
        stipend: data.stpend, // Job stipend
        criteria: data.crieteris, // Job criteria
      };

      // Send request to backend
      const response = await axios.post(
        "http://localhost:3001/addJob",
        jobData
      );
      console.log("Job posted successfully:", response.data);
      // Handle success (e.g., show success message, reset form, etc.)
    } catch (error) {
      console.error("Error posting job:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div>
      <div>
        <EmpSideBar/>
      </div>
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
          onSubmit={handleSubmit(onSubmit)}
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
              {...register("jobPost", {
                required: "Job post/title is required",
              })}
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
            {errors.jobPost && (
              <span style={{ color: "red" }}>{errors.jobPost.message}</span>
            )}
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
              {...register("jobDesc", {
                required: "Job description is required",
              })}
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
            {errors.jobDesc && (
              <span style={{ color: "red" }}>{errors.jobDesc.message}</span>
            )}
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
              {...register("time", { required: "Duration is required" })}
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
            {errors.time && (
              <span style={{ color: "red" }}>{errors.time.message}</span>
            )}
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
              {...register("stpend", { required: "Stipend is required" })}
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
            {errors.stpend && (
              <span style={{ color: "red" }}>{errors.stpend.message}</span>
            )}
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
              Criteria
            </label>
            <input
              {...register("crieteris", { required: "Criteria is required" })}
              type="text"
              placeholder="Enter the criteria for applicants"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "5px",
                border: "1px solid #ddd",
                fontSize: "16px",
              }}
            />
            {errors.crieteris && (
              <span style={{ color: "red" }}>{errors.crieteris.message}</span>
            )}
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
