import React, { useState, useRef, useEffect } from "react";

const Home = () => {
  const [showContactDropdown, setShowContactDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Contact details
  const whatsappNumber = "+923109411406";
  const emailAddress = "nasirwc05@gmail.com";
  const linkedinProfile = "https://linkedin.com/in/Nasir-afridi";
  const githubProfile = "https://github.com/Nasir-afridi";

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowContactDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="container py-5 my-4"
      style={{
        background: "#f5f7fa",
        borderRadius: "15px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        border: "1px solid #e1e5eb",
      }}
    >
      <div className="row align-items-center">
        <div className="col-12 col-md-5 mb-4 mb-md-0 d-flex justify-content-center">
          <div
            className="profile-img-container position-relative"
            style={{
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid #f8f9fa",
              boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src="muree_photo.jpg"
              alt="Muhammad Nasir - Front End Developer"
              className="img-fluid h-100 w-100 object-fit-cover"
              loading="lazy"
            />
            <div className="position-absolute top-0 start-0 w-100 h-100 border border-3 border-primary rounded-circle animate-border"></div>
          </div>
        </div>

        <div className="col-12 col-md-7 text-center text-md-start">
          <h1 className="display-4 fw-bold mb-3 text-gradient">
            Muhammad <span className="text-primary">Nasir</span>
          </h1>

          <h2 className="h3 mb-4">
            <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">
              <i className="bi bi-code-slash me-2"></i> Front End Developer
            </span>
          </h2>

          <p className="lead mb-4" style={{ maxWidth: "600px" }}>
            I build exceptional digital experiences with
            <strong> React.js</strong>, specializing in responsive design,
            performance optimization, and intuitive user interfaces that drive
            engagement and conversions.
          </p>

          <div className="d-flex flex-wrap gap-2 mb-4">
            {["HTML5", "CSS3", "Bootstrap", "Javascript", "React"].map(
              (tech) => (
                <span key={tech} className="badge bg-light text-dark border">
                  <i className={`bi bi-${tech.toLowerCase()} me-1`}></i> {tech}
                </span>
              )
            )}
          </div>

          <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3">
            <button
              onClick={() => window.open(githubProfile, "_blank")}
              className="btn btn-primary btn-lg px-4 d-flex align-items-center"
            >
              <i className="bi bi-github me-2"></i> View My Work
            </button>

            <button
              onClick={() => window.open("https://bit.ly/4iicnCG", "_blank")}
              className="btn btn-success btn-lg px-4 d-flex align-items-center"
            >
              <i className="bi bi-file-earmark-pdf me-2"></i> Resume
            </button>

            <div className="dropdown" ref={dropdownRef}>
              <button
                className="btn btn-outline-primary btn-lg px-4 dropdown-toggle d-flex align-items-center"
                onClick={() => setShowContactDropdown(!showContactDropdown)}
              >
                <i className="bi bi-send me-2"></i> Contact
              </button>

              <div
                className={`dropdown-menu p-3 ${
                  showContactDropdown ? "show" : ""
                }`}
                style={{
                  minWidth: "280px",
                  border: "none",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                }}
              >
                <h6 className="dropdown-header fw-bold text-primary mb-2">
                  Let's Connect
                </h6>

                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dropdown-item d-flex align-items-center py-2"
                >
                  <div className="bg-success bg-opacity-10 p-2 rounded me-3">
                    <i className="bi bi-whatsapp text-success fs-5"></i>
                  </div>
                  <div>
                    <div className="fw-medium">WhatsApp</div>
                    <div className="text-muted small">{whatsappNumber}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${emailAddress}`}
                  className="dropdown-item d-flex align-items-center py-2"
                >
                  <div className="bg-primary bg-opacity-10 p-2 rounded me-3">
                    <i className="bi bi-envelope text-primary fs-5"></i>
                  </div>
                  <div>
                    <div className="fw-medium">Email</div>
                    <div className="text-muted small">{emailAddress}</div>
                  </div>
                </a>

                <a
                  href={linkedinProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dropdown-item d-flex align-items-center py-2"
                >
                  <div className="bg-info bg-opacity-10 p-2 rounded me-3">
                    <i className="bi bi-linkedin text-info fs-5"></i>
                  </div>
                  <div>
                    <div className="fw-medium">LinkedIn</div>
                    <div className="text-muted small">Profile</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
