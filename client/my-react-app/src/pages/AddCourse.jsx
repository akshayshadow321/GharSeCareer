import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function AddCourse() {
  // Set up the form with react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Function to handle form submission
  const onSubmit = async (data) => {
    try {
      // Send POST request to the backend
      const response = await axios.post('http://localhost:3001/addCourse', data);
      console.log('Course created:', response.data);
      // Optionally, handle success (e.g., show a success message or reset form)
    } catch (error) {
      console.error('Error creating course:', error);
      // Optionally, handle error (e.g., show an error message)
    }
  };

  return (
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
      <h1 style={{ marginBottom: "6px", color: "black", fontSize: "25px" }}>New Course Details</h1>
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
        {/* Course Name */}
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
            {...register("courseName", { required: "Course name is required" })}
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
          {errors.courseName && <p style={{ color: "red" }}>{errors.courseName.message}</p>}
        </div>

        {/* Description */}
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
            {...register("description", { required: "Description is required" })}
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
          {errors.description && <p style={{ color: "red" }}>{errors.description.message}</p>}
        </div>

        {/* Duration */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              textAlign: "left",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            Duration (in minutes)
          </label>
          <input
            {...register("time", { required: "Duration is required", valueAsNumber: true })}
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
          {errors.time && <p style={{ color: "red" }}>{errors.time.message}</p>}
        </div>

        {/* Mentor Name */}
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
            {...register("mentor", { required: "Mentor name is required" })}
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
          {errors.mentor && <p style={{ color: "red" }}>{errors.mentor.message}</p>}
        </div>

        {/* Submit Button */}
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
  );
}

export default AddCourse;
