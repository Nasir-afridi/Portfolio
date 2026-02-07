import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Hero = () => {
  return (
    <section className="d-flex align-items-center justify-content-center vh-100 bg-dark text-light">
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="display-4">
              Hi, I'm <span className="text-info">Nasir</span>
            </h1>
            <h2 className="h4 fw-light mb-3">Frontend Developer</h2>
            <p className="lead mb-4">
              I build modern, responsive web applications using React and
              JavaScript.
            </p>

            <div className="d-flex justify-content-center gap-3">
              <Link to="/projects" className="btn btn-info btn-lg">
                View Projects
              </Link>
              <Link to="/contact" className="btn btn-outline-info btn-lg">
                Contact Me
              </Link>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default Hero;
