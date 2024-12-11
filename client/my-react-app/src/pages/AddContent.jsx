import React, { useState } from 'react';
import './AddContent.css'; // Import the CSS file for styling

const AddContent = () => {
  const [type, setType] = useState('video');

  const videoContent = () => {
    return (
      <>
        <h1 className="section-title">Add Video</h1>
        <form className="content-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              id="vdtitle"
              name="vdtitle"
              type="text"
              placeholder="Enter video title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="topic">Topic</label>
            <input
              id="topic"
              name="topic"
              type="text"
              placeholder="Enter video topic"
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Duration (minutes)</label>
            <input
              id="vdtime"
              name="vdtime"
              type="text"
              placeholder="Enter video duration"
            />
          </div>
          <div className="form-group">
            <label htmlFor="vdlink">Link</label>
            <input
              id="vdlink"
              name="vdlink"
              type="text"
              placeholder='Paste the video url here'
            />
          </div>
          <button type="submit" className="submit-button">Submit Video</button>
        </form>
      </>
    );
  };

  const refContent = () => {
    return (
      <>
        <h1 className="section-title">Add PDF</h1>
        <form className="content-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              id="pdftitle"
              name="pdftitle"
              type="text"
              placeholder="Enter pdf title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="topic">Topic</label>
            <input
              id="topic"
              name="topic"
              type="text"
              placeholder="Enter pdf topic"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="pdflink">Link</label>
            <input
              id="pdflink"
              name="pdflink"
              type="text"
              placeholder='Paste the pdf here'
            />
          </div>
          <button type="submit" className="submit-button">Submit Video</button>
        </form>
      </>
    );
  };

  const testContent = () => {
    return (
      <>
        <h1 className="section-title">Add Test</h1>
        <form className="content-form" >
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
          <button type="submit" className="submit-button">Submit Test</button>
        </form>
      </>
    );
  };

 

  return (
    <div className="add-content-container">
      <div className="button-group">
        <button className="toggle-button" onClick={() => setType('video')}>
          Add Video
        </button>
        <button className="toggle-button" onClick={() => setType('test')}>
          Add Test
        </button>
        <button className="toggle-button" onClick={() => setType('ref')}>
          Add Reference PDF
        </button>
      </div>

      {type === 'video' ? videoContent() : type === 'test' ? testContent() : refContent()}
    </div>
  );
};

export default AddContent;
