const VideoPreview = () => {
  return (
    <div className="card">
      <div className="card-body p-2">
        <h6 className="card-title mb-2">CRM Dashboard Demo</h6>
        <a
          href="https://www.youtube.com/watch?v=WvbxI35hcYA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.youtube.com/vi/WvbxI35hcYA/hqdefault.jpg"
            alt="CRM Dashboard Demo"
            className="w-full h-48 object-cover rounded"
          />
        </a>
      </div>
    </div>
  );
};

export default VideoPreview;
