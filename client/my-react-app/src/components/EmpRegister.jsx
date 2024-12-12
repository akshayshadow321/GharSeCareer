import React from "react";

const EmpRegister = () => {
  let compName = "New Tech"
  let email = "newtech@gmail.com"
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
          Your application has been accepted,
          <br /> please fill in the details to get started
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
              Comapny Name
            </label>
            <input
              name="compName"
              value={compName}
              type="text"
              readOnly
              
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
              Official Email
            </label>
            <input
              name="compEamil"
              value={email}
              type="text"
              readOnly
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
              name="empDesc"
              placeholder="Tell us what your company is about"
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
              Conatct number
            </label>
            <input
              name="empContact"
              type="number"
              placeholder="Enter your conatct"
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
              Address
            </label>
            <textarea
              name="empAddress"
              placeholder="Tell us where your company is loacted"
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
              Password
            </label>
            <input
              name="empPwd"
              type="password"
              placeholder="Enter your password"
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
              Confirm Password
            </label>
            <input
              name="empPwd"
              type="password"
              placeholder="Confirm password(should be same as the password)"
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
              name="companyImage"
              type="file"
              accept="image/*"
              placeholder="Upload your company's banner image here"
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
    </div>
  );
};

export default EmpRegister;
