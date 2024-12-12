import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const EmpRegister = () => {
  const { register, handleSubmit, formState: { errors },watch } = useForm();
  const email = localStorage.getItem('email');
  const navigate = useNavigate();
  

  const onSubmit = async (data) => {
    try {
      // Send data to backend
      const response = await axios.post('http://localhost:3001/empRegister', {
        companyName: data.companyName,
        email: email,
        password: data.password,
        number: data.contact,
        address: data.address,
        description: data.description,
      });

      console.log('Employer registered successfully:', response.data);
      navigate('')
      // Handle successful registration (e.g., navigate to a different page or show a success message)
    } catch (error) {
      console.error('Error registering employer:', error);
      // Handle error (e.g., show error message to user)
    }
  };

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
              Official Email
            </label>
            <input
              name="compEmail"
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
              Company Name
            </label>
            <input
              {...register('companyName', { required: 'Company Name is required' })}
              type="text"
              placeholder="Enter your company name"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "5px",
                border: "1px solid #ddd",
                fontSize: "16px",
              }}
            />
            {errors.companyName && <span style={{ color: 'red' }}>{errors.companyName.message}</span>}
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
              {...register('description')}
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
              Contact number
            </label>
            <input
              {...register('contact', {
                required: 'Contact number is required',
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Invalid contact number',
                },
              })}
              type="number"
              placeholder="Enter your contact number"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "5px",
                border: "1px solid #ddd",
                fontSize: "16px",
              }}
            />
            {errors.contact && <span style={{ color: 'red' }}>{errors.contact.message}</span>}
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
              {...register('address', { required: 'Address is required' })}
              placeholder="Tell us where your company is located"
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
            {errors.address && <span style={{ color: 'red' }}>{errors.address.message}</span>}
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
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password should be at least 6 characters long',
                },
              })}
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
            {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}
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
              {...register('confirmPassword', {
                required: 'Confirm Password is required',
                validate: value =>
                  value === watch('password') || 'Passwords do not match',
              })}
              type="password"
              placeholder="Confirm your password"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "5px",
                border: "1px solid #ddd",
                fontSize: "16px",
              }}
            />
            {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword.message}</span>}
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
            Submit Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmpRegister;
