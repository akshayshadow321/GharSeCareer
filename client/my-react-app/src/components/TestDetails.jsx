import React from "react";
import CreateTest from "./CreateTest";
import { useNavigate } from "react-router-dom";
const TestDetails = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/createTest');
      };
      const handleBackClick = () => {
        navigate('/courseDetails');
      };
  const test = [
    {
      id: 1,
      ques: "what is CSS",
      options: [
        {
          op1: "ABC",
        },
        { op2: "DEF" },
        { op3: "xyz" },
        { op4: "lmn" },
      ],
      ans: "ABC",
    },
    {
      id: 2,
      ques: "What id Hooks in react",
      options: [
        {
          op1: "ABC",
        },
        { op2: "DEF" },
        { op3: "xyz" },
        { op4: "lmn" },
      ],
      ans: "ABC",
    },
  ];
  

  return (
    <>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "20px",
            backgroundColor: "#f5f5f5",
          }}
        >
          <h1 style={{fontSize:"30px",textAlign:'center'}}>Questions present the test</h1>
          {test.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: "#ffffff",

                borderRadius: "8px",
                margin: "15px 0",
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h2
                style={{
                  fontSize: "1.5rem",
                  color: "#4b0082",
                  marginBottom: "10px",
                  fontWeight: "600",
                }}
              >
                {item.ques}
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                {item.options.map((option, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: "#f3e6ff",
                      padding: "10px",
                      border: "1px solid #d1b2ff",
                      borderRadius: "5px",
                      transition: "background-color 0.3s ease",
                      textAlign: "center",
                    }}
                  >
                    <p>{Object.values(option)[0]}</p>
                  </div>
                ))}
              </div>

              <h3
                style={{
                  marginTop: "15px",
                  fontSize: "1.1rem",
                  color: "#800080",
                }}
              >
                Correct answer:{" "}
                <span style={{ fontWeight: "bold", color: "#6a0dad" }}>
                  {item.ans}
                </span>
              </h3>
            </div>
          ))}
          <button type="submit"
          onClick={handleClick} 
          className="submit-button">
            Add Questions
          </button>
          <button type="submit" 
          onClick={handleBackClick} 
          className="submit-button" >
            Back
          </button>
        </div>
      </>
  );
};

export default TestDetails;
