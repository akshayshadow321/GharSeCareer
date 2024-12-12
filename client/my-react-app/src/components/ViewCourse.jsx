import React from "react";
const courses = [
  {
    courseName: "Digital Marketing",
    Mentor: "Akshay",
    Duration: "5 Hours",
  },
  {
    courseName: "Cooking",
    Mentor: "Akshay",
    Duration: "5 Hours",
  },
];
const ViewCourse = () => {
  return (
    <div>
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
            Courses
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
              Course Name
            </div>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                color: "#333",
                textAlign: "center",
              }}
            >
              Mentor
            </div>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                color: "#333",
                textAlign: "center",
              }}
            >
              Duration
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
          {courses.map((course, index) => (
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
                {course.courseName}
              </div>
              <div style={{ fontSize: "16px", textAlign: "center" }}>
                {course.Mentor}
              </div>
              <div style={{ fontSize: "16px", textAlign: "center" }}>
                {course.Duration}
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
                  Edit
                </button>
                <button
                  style={{
                    padding: "8px 15px",
                    marginLeft: "5px",
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
    </div>
  );
};

export default ViewCourse;
