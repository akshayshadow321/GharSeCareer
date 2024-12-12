import React from "react";

const AddRefContent = () => {
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
            placeholder="Paste the pdf here"
          />
        </div>
        <button type="submit" className="submit-button">
          Submit Video
        </button>
      </form>
    </>
  );
};

export default AddRefContent;
