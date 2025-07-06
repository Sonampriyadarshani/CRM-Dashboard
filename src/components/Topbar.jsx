const Topbar = () => {
  return (
    <div className="d-flex justify-content-between align-items-center px-4 py-3 bg-white border-bottom">
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        style={{ maxWidth: "300px" }}
      />
      <div className="d-flex align-items-center">
        <img
          src="https://i.imgur.com/7k12EPD.png"
          className="rounded-circle me-2"
          alt="profile"
          width={40}
          height={40}
        />
        <div>
          <strong>Priyanka</strong>
          <div className="text-muted small">Frontend Developer</div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
