import React from "react";

const VideoOverview = () => {
  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <h6 className="card-title">CRM Video Overview</h6>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="CRM Overview"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoOverview;
