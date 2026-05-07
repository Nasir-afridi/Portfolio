import { motion } from "framer-motion";

const About = () => {
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

  const cardStyle = {
    background: "rgba(13, 110, 253, 0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",
    borderRadius: "16px",
    transition: "all .3s ease",
    cursor: "pointer",
  };

  const topBar = {
    height: 4,
    background: "linear-gradient(135deg,#4facfe,#00f2fe)",
    borderRadius: 99,
    marginBottom: 18,
    opacity: 0.9,
  };

  const hoverEffect = {
    y: -8,
    boxShadow: "0 18px 45px rgba(13,110,253,.18)",
    borderColor: "rgba(13,110,253,0.35)",
  };

  return (
    <section
      id="about"
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
          <h2 className="text-info mb-3 display-4 fw-bold">About Me</h2>
          <div
            className="mx-auto bg-info"
            style={{ width: 80, height: 4, borderRadius: 2 }}
          />
        </motion.div>

        <motion.p
          className="lead mb-5 px-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          style={{
            fontSize: "1.05rem",
            maxWidth: 850,
            margin: "0 auto 3rem",
            color: "rgba(255,255,255,.85)",
            textAlign: "justify",
          }}
        >
          I don't just build websites I create{" "}
          <span className="text-info fw-semibold">
            powerful digital solutions
          </span>{" "}
          that help businesses grow and stand out in the digital world. As a
          Developer I transform ideas into fast, scalable, and user-focused
          applications with a strong focus on clean architecture,
          responsiveness, and seamless user experience. From modern business
          websites to high-performing platforms, I deliver solutions that
          combine{" "}
          <span className="text-info fw-semibold">
            performance, modern design, SEO optimization, scalability, and real
            business growth
          </span>{" "}
          with long-term maintainability.
        </motion.p>

        <motion.div
          className="row g-4 mb-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="col-lg-6">
            <motion.div
              className="h-100 p-4"
              style={cardStyle}
              variants={fadeInLeft}
              whileHover={hoverEffect}
            >
              <div style={topBar} />
              <h4 className="text-info mb-3 fw-bold">What I Bring</h4>

              <ul className="list-unstyled mb-0">
                {[
                  "Performance-optimized applications",
                  "Mobile-first responsive design",
                  "API integrations & dynamic content",
                  "SEO-friendly structure",
                  "Clean & maintainable code",
                ].map((item, i) => (
                  <li key={i} className="mb-2 d-flex">
                    <span className="text-info me-2">▹</span>
                    <span style={{ color: "rgba(255,255,255,.85)" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              className="h-100 p-4"
              style={cardStyle}
              variants={fadeInRight}
              whileHover={hoverEffect}
            >
              <div style={topBar} />
              <h4 className="text-info mb-3 fw-bold">Future Goal</h4>

              <p style={{ fontSize: ".95rem", color: "rgba(255,255,255,.85)" }}>
                Exploring and learning AI alongside{" "}
                <span className="text-info fw-semibold">development</span> to
                build smarter, more intelligent digital solutions that combine
                modern user experiences with the power of automation and
                emerging technologies.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="row g-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="col-lg-6 mx-auto">
            <motion.div
              className="h-100 p-4"
              style={cardStyle}
              variants={fadeInLeft}
              whileHover={hoverEffect}
            >
              <div style={topBar} />

              <h4 className="text-info mb-3 fw-bold">Experience</h4>

              <h5 className="mb-1">ZeestMedia</h5>
              <p className="mb-1">Junior Web Developer</p>
              <p className="mb-3" style={{ fontSize: ".85rem" }}>
                March 2026 - Present
              </p>

              <ul className="list-unstyled mb-4">
                {[
                  "Developing modern applications using JavaScript and React.js",
                  "Building and customizing WordPress & Wix websites",
                  "Implementing SEO best practices",
                  "Creating responsive UI across devices",
                  "Maintaining performance optimization",
                ].map((item, i) => (
                  <li key={i} className="mb-2 d-flex">
                    <span className="text-info me-2">▹</span>
                    <span style={{ color: "rgba(255,255,255,.85)" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <h5 className="mb-1">Capregsoft Private Limited</h5>
              <p className="mb-1">Frontend Developer (Internship)</p>
              <p className="mb-3" style={{ fontSize: ".85rem" }}>
                June 2025 - December 2025
              </p>

              <ul className="list-unstyled mb-0">
                {[
                  "Built React UIs with performance optimization",
                  "Customized WordPress themes with SEO",
                  "Mobile-first landing pages",
                  "REST API integration",
                  "Improved UI responsiveness",
                ].map((item, i) => (
                  <li key={i} className="mb-2 d-flex">
                    <span className="text-info me-2">▹</span>
                    <span style={{ color: "rgba(255,255,255,.85)" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
