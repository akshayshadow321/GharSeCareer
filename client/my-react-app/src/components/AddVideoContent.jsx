import React from "react";

const AddVideoContent = () => {
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
            placeholder="Paste the video url here"
          />
        </div>
        <button type="submit" className="submit-button">
          Submit Video
        </button>
      </form>
    </>
  );
};

export default AddVideoContent;
