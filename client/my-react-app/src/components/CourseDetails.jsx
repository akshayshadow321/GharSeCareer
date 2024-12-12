import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AddVideoContent from "./AddVideoContent";
import AddRefContent from "./AddRefContent";
import axios from "axios";


const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const fetchApi = async () => {
    try {
      const response = await axios.post('http://localhost:3001/specificCourse', { id });
      setCourse(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  }

  useEffect(() => {
    fetchApi();
  }, []);


  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate('/admin');
  };
  let img = "data:image/jpeg;base64,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"
  const [courseName, setCourseName] = useState(
    "Introduction to Web Development"
  );
  const [description, setDescription] = useState(
    "This course covers the basics of HTML, CSS, and JavaScript for beginners. It provides hands-on experience and is designed for those new to web development."
  );
  const [mentor, setMentor] = useState("John Doe");
  const [duration, setDuration] = useState("90");
  const video = [
    {
      id: 1,
      Title: "Intro to CSS",
      duration: "60 minutes",
      vdlink: "https://www.example.com/reference-pdf",
    },
    {
      id: 2,
      Title: "Reactive Website",
      duration: "60 minutes",
      vdlink: "https://www.example.com/reference-pdf",
    },
  ];
  const refMaterial = [
    {
      id: 1,
      Title: "Intro to CSS",
      pdflink: "https://www.example.com/reference-pdf",
    },
    {
      id: 2,
      Title: "HTMl",
      pdflink: "https://www.example.com/reference-pdf",
    },
  ];
  const [referenceLink, setReferenceLink] = useState(
    "https://www.example.com/reference-pdf"
  );

  const handleTestView = () => {
    navigate('/testDetails')
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
            height: "150px",
            width: "100%",
            borderRadius: "8px",
            marginBottom: "10px",
          }}
        >
          <h1
            style={{
              padding: "110px 20px",
              color: "#fff",
              fontSize: "28px",
              fontWeight: "600",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
            }}
          >
            Course Details
          </h1>
        </div>
        {course ?
          (
            <div>
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
                  value={course.courseName}
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

              {/* Ḍesc */}
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
                  value={course.description}
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

              {/* Mentor */}
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
                  value={course.mentor}
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

              {/* Duration */}
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
                  value={course.time   + " minutes"}
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

              {/* Video */}
              <div
                style={{
                  marginBottom: "20px",
                  backgroundColor: "#f9f9f9",
                  padding: "10px",
                  borderRadius: "6px",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
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
                    <div>
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal1"
                        style={{
                          marginLeft: "20px",
                          padding: "8px 15px",
                          backgroundColor: "#7a2d96",
                          border: "none",
                          borderRadius: "5px",
                          color: "#fff",
                          cursor: "pointer",
                          fontSize: "1em",
                        }}
                      >
                        Add New Video
                      </button>
                      <div
                        className="modal fade"
                        id="exampleModal1"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog LoginModal">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Login
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <AddVideoContent />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Render a list of videos */}
                  <div style={{ marginTop: "20px" }}>
                    {video.map((item) => (
                      <div key={item.id} style={{ marginBottom: "15px" }}>
                        <div
                          style={{
                            fontSize: "1.2em",
                            fontWeight: "bold",
                            color: "#333",
                          }}
                        >
                          {item.Title}
                        </div>
                        <div style={{ fontSize: "1em", color: "#777" }}>
                          Duration: {item.duration}
                        </div>
                        <a
                          href={item.vdlink}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "#7a2d96",
                            fontSize: "1em",
                            textDecoration: "none",
                            display: "inline-block",
                            marginTop: "5px",
                          }}
                        >
                          Video Link
                        </a>
                        <button
                          onClick={() => deleteVideo(item.id)}
                          style={{
                            marginLeft: "15px",
                            padding: "8px 12px",
                            backgroundColor: "#ff4d4d",
                            border: "none",
                            borderRadius: "5px",
                            color: "#fff",
                            cursor: "pointer",
                            fontSize: "1em",
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* REF material */}
              <div
                style={{
                  marginBottom: "20px",
                  backgroundColor: "#f9f9f9",
                  padding: "10px",
                  borderRadius: "6px",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
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
                    <div>
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                        style={{
                          marginLeft: "20px",
                          padding: "8px 15px",
                          backgroundColor: "#7a2d96",
                          border: "none",
                          borderRadius: "5px",
                          color: "#fff",
                          cursor: "pointer",
                          fontSize: "1em",
                        }}
                      >
                        Add New PDF
                      </button>
                      <div
                        className="modal fade"
                        id="exampleModal2"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog LoginModal">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Login
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <AddRefContent />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Render a list of videos */}
                  <div style={{ marginTop: "20px" }}>
                    {refMaterial.map((item) => (
                      <div key={item.id} style={{ marginBottom: "15px" }}>
                        <div
                          style={{
                            fontSize: "1.2em",
                            fontWeight: "bold",
                            color: "#333",
                          }}
                        >
                          {item.Title}
                        </div>

                        <a
                          href={item.pdflink}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "#7a2d96",
                            fontSize: "1em",
                            textDecoration: "none",
                            display: "inline-block",
                            marginTop: "5px",
                          }}
                        >
                          PDF Link
                        </a>
                        <button
                          style={{
                            marginLeft: "15px",
                            padding: "8px 12px",
                            backgroundColor: "#ff4d4d",
                            border: "none",
                            borderRadius: "5px",
                            color: "#fff",
                            cursor: "pointer",
                            fontSize: "1em",
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) :
          (
            <h1>Loading...</h1>
          )
        }
        {/* Cpurse Name */}


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
          View Test Details
        </button>
        <button type="submit"
          onClick={handleBackClick}
          className="submit-button" >
          Back
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
