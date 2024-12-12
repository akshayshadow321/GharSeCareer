import React from 'react'
import {Container} from 'react-bootstrap'
const PlayVideo = () => {
    let vdscr = "https://www.youtube.com/embed/xNRJwmlRBNU?si=COm_qVAHzj2dSv4R"
  return (
    <div style={{ padding: "15px" }}>
      <Container
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "left",
        }}
      >
        {/* Bootstrap 5 Video Embed with aspect ratio */}
        <div className="ratio ratio-16x9" style={{ maxWidth: "800px", width: "100%" }}>
          <iframe
            src = {vdscr}
            title="video"
            allowFullScreen
          ></iframe>
        </div>
      </Container>
    </div>
  )
}

export default PlayVideo

  