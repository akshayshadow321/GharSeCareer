import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CreateTest = () => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/testDetails');
      };
  return (
    <div style={{  maxWidth: '800px',margin: '0 auto'}}>
      <div >
        <h1 className="section-title">Add Test</h1>
        <form className="content-form">
          <div className="form-group">
            <label htmlFor="question">Question</label>
            <input
              id="question"
              name="question"
              type="text"
              placeholder="Enter the question"
            />
          </div>
          <div className="form-group">
            <label htmlFor="topic">Topic</label>
            <input
              id="topic"
              name="topic"
              type="text"
              placeholder="Enter test topic"
            />
          </div>
          <div className="form-group">
            <label>Options</label>
            <div className="options">
              <input name="op1" type="text" placeholder="Option 1" />
              <input name="op2" type="text" placeholder="Option 2" />
              <input name="op3" type="text" placeholder="Option 3" />
              <input name="op4" type="text" placeholder="Option 4" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="answer">Correct Answer</label>
            <input
              id="answer"
              name="answer"
              type="text"
              placeholder="Enter the correct answer"
            />
          </div>
          <button type="submit" className="submit-button">
            Submit Question
          </button>
          <button type="submit" 
          onClick={handleBackClick} 
          className="submit-button" >
            Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTest;
