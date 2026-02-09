import { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  };
  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const projects = [
    {
      id: 1,
      title: "Qazi Jewellers",
      type: "E-Commerce Platform",
      description:
        "A jewellery e-commerce platform built with WordPress & WooCommerce, featuring a responsive UI (Elementor), live gold/silver pricing, WhatsApp chat support, custom contact forms, and SEO/performance optimizations for a fast, mobile-friendly experience.",
      tech: [
        "WordPress",
        "WooCommerce",
        "Elementor",
        "Custom CSS",
        "SEO",
        "Plugins",
      ],
      link: "https://qazijewellers.com",
      gradient: "linear-gradient(135deg, rgb(79, 172, 254), rgb(0, 242, 254))",
      icon: "💎",
    },
    {
      id: 2,
      title: "Amanex-Coin",
      type: "Crypto Platform",
      description:
        "A WordPress-based cryptocurrency platform focused on community empowerment and blockchain-driven digital value, designed with a responsive and user-friendly interface.",
      tech: [
        "WordPress",
        "WooCommerce",
        "Custom Themes",
        "Plugins",
        "Responsive Design",
      ],
      link: "https://amanex-coin.com",
      gradient: "linear-gradient(135deg, rgb(79, 172, 254), rgb(0, 242, 254))",
      icon: "₿",
    },
    {
      id: 3,
      title: "Fresh-Hub",
      type: "Full-Stack Application",
      description:
        "Built React.js application with Bootstrap UI, integrating Express.js backend for authentication (login/signup) using JWT tokens. Implemented secure public and private routes for role-based access with PostgreSQL for user data management.",
      tech: ["React.js", "Bootstrap", "Express.js", "PostgreSQL", "JWT"],
      link: "#",
      gradient: "linear-gradient(135deg,#4facfe,#00f2fe)",
      icon: "🌿",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-dark text-light py-5 min-vh-100 d-flex align-items-center"
      style={{
        fontFamily: "'Poppins', sans-serif",
        letterSpacing: "0.3px",
        lineHeight: "1.7",
      }}
    >
      <div className="container py-4">
        <motion.div
          className="text-center mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-info mb-3 display-4 fw-bold">My Projects</h2>
          <div
            className="mx-auto bg-info"
            style={{ width: 80, height: 4, borderRadius: 2 }}
          />
        </motion.div>

        <motion.p
          className="lead mb-5 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          style={{
            color: "rgba(255,255,255,.9)",
            maxWidth: 800,
            margin: "0 auto",
          }}
        >
          Crafting digital experiences with{" "}
          <span className="text-info fw-semibold">modern technologies</span> and{" "}
          <span className="text-info fw-semibold">innovative solutions</span>.
        </motion.p>

        <motion.div
          className="row g-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`col-lg-6 ${project.id === 3 ? "offset-lg-3" : ""}`}
            >
              <motion.div
                className="h-100 rounded-3 shadow-lg border border-secondary border-opacity-25"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(13,110,253,.05), rgba(13,110,253,.02))",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  padding: "25px",
                }}
                variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
                whileHover={{
                  y: -5,
                  boxShadow: "0 12px 30px rgba(13,110,253,.15)",
                }}
              >
                <div
                  style={{
                    height: 6,
                    background: project.gradient,
                    borderRadius: 3,
                    marginBottom: 20,
                  }}
                />

                <div className="d-flex align-items-center mb-3">
                  <div style={{ fontSize: "2.5rem", marginRight: 15 }}>
                    {project.icon}
                  </div>
                  <h5 className="text-info mb-0">{project.type}</h5>
                </div>
                <h3 style={{ color: "#fff", marginBottom: 15 }}>
                  {project.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,.85)", marginBottom: 15 }}>
                  {project.description}
                </p>

                <div className="d-flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: "6px 14px",
                        background: "rgba(102,16,242,.1)",
                        color: "#a78bfa",
                        borderRadius: 10,
                        fontSize: 13,
                        fontWeight: 600,
                        border: "1px solid rgba(102,16,242,.2)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link !== "#" ? (
                  <center>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "10px 20px",
                        background: "rgba(255,255,255,0.1)", 
                        color: "rgba(255,255,255,0.85)",
                        borderRadius: 12,
                        textDecoration: "none",
                        fontWeight: 600,
                      }}
                    >
                      View Live
                    </a>
                  </center>
                ) : (
                  <center>
                    <button
                      disabled
                      style={{
                        padding: "10px 20px",
                        background: "rgba(138,142,160,.2)",
                        color: "#8892b0",
                        borderRadius: 12,
                        border: "1px solid rgba(138,142,160,.3)",
                        fontWeight: 600,
                      }}
                    >
                      Private Project
                    </button>
                  </center>
                )}
              </motion.div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-5 pt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="p-5 rounded-4 shadow-lg border border-secondary border-opacity-25 mx-auto"
            style={{
              background:
                "linear-gradient(135deg, rgba(13,110,253,.10), rgba(13,110,253,.03))",
              textAlign: "center",
              maxWidth: "900px",
              backdropFilter: "blur(10px)",
            }}
          >
            <h5
              className="text-info mb-3 fw-bold"
              style={{ fontSize: "clamp(1.8rem,4vw,2.5rem)" }}
            >
              Interested in working together?
            </h5>

            <p
              className="mb-4 mx-auto"
              style={{
                color: "rgba(255,255,255,.85)",
                fontSize: "clamp(1rem,2vw,1.1rem)",
                maxWidth: "620px",
                lineHeight: "1.6",
              }}
            >
              Let's build something amazing. I'm always open to discussing new
              projects and opportunities.
            </p>

            <div
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="mailto:nasirwc05@gmail.com"
                className="btn btn-info px-4 py-3 fw-semibold"
                style={{
                  fontSize: "1rem",
                  minWidth: "160px",
                }}
              >
                Get In Touch
              </a>

              <a
                href="https://github.com/nasir-afridi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-info px-4 py-3 fw-semibold"
                style={{
                  fontSize: "1rem",
                  minWidth: "160px",
                }}
              >
                View GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
