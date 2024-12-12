import React from "react";
import { useState } from "react";
const CourseDetails = () => {
  let img = "https://booksalmirah.com/wp-content/uploads/2023/08/alfons-morales-YLSwjSy7stw-unsplash-1.jpg"
  const [courseName, setCourseName] = useState(
    "Introduction to Web Development"
  );
  const [description, setDescription] = useState(
    "This course covers the basics of HTML, CSS, and JavaScript for beginners. It provides hands-on experience and is designed for those new to web development."
  );
  const [mentor, setMentor] = useState("John Doe");
  const [duration, setDuration] = useState("90");
  const [videoLink, setVideoLink] = useState(
    "https://www.example.com/video-link"
  );
  const [referenceLink, setReferenceLink] = useState(
    "https://www.example.com/reference-pdf"
  );

  const handleTestView = () => {
    // Add logic to view the test, such as opening a modal or redirecting to another page.
    alert("View the test details here!");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "30px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${img})`, // Add your image URL here
            backgroundSize: "cover",
            backgroundPosition: "center",
             height:"150px",
             width:'100%',
            borderRadius: "8px",
            marginBottom:"10px"
          }}
        >
          <h1
            style={{
              padding:"110px 20px",
              color: "#fff",
              fontSize: "28px",
              fontWeight: "600",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
              
            }}
          >
            Course Details
          </h1>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              fontSize: "1.5em",
              fontWeight: "bold",
              color: "#7a2d96",
              textAlign: "left",
            }}
          >
            Course Name
          </div>
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            style={{
              marginTop: "10px",
              padding: "12px",
              width: "100%",
              fontSize: "1.2em",
              border: "1px solid #ddd",
              borderRadius: "5px",
              color: "#555",
              textAlign: "left",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              fontSize: "1.5em",
              fontWeight: "bold",
              color: "#7a2d96",
              textAlign: "left",
            }}
          >
            Description
          </div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              marginTop: "10px",
              padding: "12px",
              width: "100%",
              fontSize: "1.2em",
              border: "1px solid #ddd",
              borderRadius: "5px",
              color: "#555",
              resize: "vertical",
              minHeight: "100px",
              textAlign: "left", // Left-align text in the textarea
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              fontSize: "1.5em",
              fontWeight: "bold",
              color: "#7a2d96",
              textAlign: "left",
            }}
          >
            Mentor
          </div>
          <input
            type="text"
            value={mentor}
            onChange={(e) => setMentor(e.target.value)}
            style={{
              marginTop: "10px",
              padding: "12px",
              width: "100%",
              fontSize: "1.2em",
              border: "1px solid #ddd",
              borderRadius: "5px",
              color: "#555",
              textAlign: "left", // Left-align text in the input field
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              fontSize: "1.5em",
              fontWeight: "bold",
              color: "#7a2d96",
              textAlign: "left",
            }}
          >
            Duration
          </div>
          <input
            type="text"
            value={duration + " minutes"}
            onChange={(e) => setDuration(e.target.value)}
            style={{
              marginTop: "10px",
              padding: "12px",
              width: "100%",
              fontSize: "1.2em",
              border: "1px solid #ddd",
              borderRadius: "5px",
              color: "#555",
              textAlign: "left", // Left-align text in the input field
            }}
          />
        </div>

        <div
          style={{
            marginBottom: "20px",
            backgroundColor: "#f9f9f9",
            padding: "10px",
            borderRadius: "6px",
          }}
        >
          <div
            style={{
              fontSize: "1.5em",
              fontWeight: "bold",
              color: "#7a2d96",
              textAlign: "left",
            }}
          >
            Videos
          </div>
          <input
            type="text"
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
            style={{
              marginTop: "10px",
              padding: "12px",
              width: "100%",
              fontSize: "1.2em",
              border: "1px solid #ddd",
              borderRadius: "5px",
              color: "#555",
              textAlign: "left", // Left-align text in the input field
            }}
          />
        </div>

        <div
          style={{
            marginBottom: "20px",
            backgroundColor: "#f9f9f9",
            padding: "10px",
            borderRadius: "6px",
          }}
        >
          <div
            style={{
              fontSize: "1.5em",
              fontWeight: "bold",
              color: "#7a2d96",
              textAlign: "left",
            }}
          >
            Reference Material
          </div>
          <input
            type="text"
            value={referenceLink}
            onChange={(e) => setReferenceLink(e.target.value)}
            style={{
              marginTop: "10px",
              padding: "12px",
              width: "100%",
              fontSize: "1.2em",
              border: "1px solid #ddd",
              borderRadius: "5px",
              color: "#555",
              textAlign: "left", // Left-align text in the input field
            }}
          />
        </div>

        {/* View Test Button */}
        <button
          onClick={handleTestView}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#7a2d96", // Purple color
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
          View Test
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
