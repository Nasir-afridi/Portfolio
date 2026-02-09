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
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
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
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-info mb-3 display-4 fw-bold"
            style={{ letterSpacing: "1.5px" }}
          >
            About Me
          </h2>
          <div
            className="mx-auto bg-info"
            style={{ width: "80px", height: "4px", borderRadius: "2px" }}
          />
        </motion.div>

        <motion.p
          className="lead mb-5 px-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.2, duration: 0.7 }}
          style={{
            fontSize: "1.15rem",
            maxWidth: "800px",
            margin: "0 auto 3rem",
            color: "rgba(255, 255, 255, 0.9)",
            textAlign: "justify",
          }}
        >
          I don't just write code I build <span className="text-info fw-semibold">
            digital experiences that matter
          </span>
          . As a Frontend Developer specializing in <span className="text-info fw-semibold">React</span>, I turn complex
          challenges into intuitive, lightning-fast web applications. Whether
          it's an e-commerce store that converts or a business platform that
          scales, I deliver solutions that combine <span className="text-info fw-semibold">
             performance, elegance, and real results
          </span>
          .
        </motion.p>

        <motion.div
          className="row justify-content-center g-4 mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <div className="col-lg-6">
            <motion.div
              className="h-100 p-4 rounded-3 shadow-lg border border-secondary border-opacity-25"
              style={{
                background:
                  "linear-gradient(135deg, rgba(13, 110, 253, 0.05), rgba(13, 110, 253, 0.02))",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              variants={fadeInLeft}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -5,
                boxShadow: "0 12px 30px rgba(13, 110, 253, 0.15)",
              }}
            >
              <h4 className="text-info mb-4 fw-bold">What I Bring</h4>
              <ul className="list-unstyled mb-0">
                {[
                  "Performance-optimized websites",
                  "Mobile-first responsive design",
                  "API integrations & dynamic content",
                  "SEO-friendly structure",
                  "Clean & maintainable code",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="mb-3 d-flex align-items-start"
                    variants={fadeInUp}
                    style={{ fontSize: "0.95rem" }}
                  >
                    <span className="text-info me-2">▹</span>
                    <span style={{ color: "rgba(255, 255, 255, 0.85)" }}>
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              className="h-100 p-4 rounded-3 shadow-lg border border-secondary border-opacity-25"
              style={{
                background:
                  "linear-gradient(135deg, rgba(13, 110, 253, 0.05), rgba(13, 110, 253, 0.02))",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              variants={fadeInRight}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -5,
                boxShadow: "0 12px 30px rgba(13, 110, 253, 0.15)",
              }}
            >
              <h4 className="text-info mb-4 fw-bold">Future Goal</h4>
              <p
                className="mb-0"
                style={{
                  fontSize: "0.95rem",
                  color: "rgba(255, 255, 255, 0.85)",
                }}
              >
                Expand toward <span className="text-info fw-semibold">
                  full-stack development </span>
                  and <span className="text-info fw-semibold">
                  scalable application architecture
                </span>
                , building end-to-end solutions that deliver exceptional user
                experiences and robust backend systems.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="row justify-content-center g-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <div className="col-lg-6">
            <motion.div
              className="h-100 p-4 rounded-3 shadow-lg border border-secondary border-opacity-25"
              style={{
                background:
                  "linear-gradient(135deg, rgba(13, 110, 253, 0.05), rgba(13, 110, 253, 0.02))",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              variants={fadeInLeft}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -5,
                boxShadow: "0 12px 30px rgba(13, 110, 253, 0.15)",
              }}
            >
              <h4 className="text-info mb-4 fw-bold">Experience</h4>

              <div className="mb-3">
                <p className="text-info mb-2" style={{ fontSize: "0.9rem" }}>
                  <h5>Capregsoft Private Limited</h5>
                </p>
                <h6
                  className=" mb-1"
                  style={{ fontSize: "1.05rem", color: "#fff" }}
                >
                  Frontend Developer (Internship)
                </h6>

                <p className=" mb-3" style={{ fontSize: "0.85rem" }}>
                  June 2025 - December 2025
                </p>
              </div>

              <ul className="list-unstyled mb-0">
                {[
                  "Built React.js UIs with lazy loading, reducing load time by 40%",
                  "Customized WordPress themes with SEO optimization (meta tags, schema, alt text)",
                  "Designed mobile-first Elementor landing pages, increasing mobile traffic by 25%",
                  "Integrated REST APIs in React & WordPress for real-time content delivery",
                  "Ensured responsive UX across all devices, lowering bounce rate",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="mb-3 d-flex align-items-start"
                    variants={fadeInUp}
                    style={{ fontSize: "0.9rem" }}
                  >
                    <span className="text-info me-2 flex-shrink-0">▹</span>
                    <span style={{ color: "rgba(255, 255, 255, 0.85)" }}>
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              className="h-100 p-4 rounded-3 shadow-lg border border-secondary border-opacity-25"
              style={{
                background:
                  "linear-gradient(135deg, rgba(13, 110, 253, 0.05), rgba(13, 110, 253, 0.02))",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              variants={fadeInRight}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -5,
                boxShadow: "0 12px 30px rgba(13, 110, 253, 0.15)",
              }}
            >
              <h4 className="text-info mb-4 fw-bold">Education</h4>

              <div>
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <h5
                    className="fw-semibold mb-0"
                    style={{ fontSize: "1.05rem", color: "#fff" }}
                  >
                    Diploma of Associate Engineering.
                  </h5>
                  <span
                    className=" ms-3 flex-shrink-0"
                    style={{ fontSize: "0.85rem" }}
                  >
                    Sep 2022 - June 2025
                  </span>
                </div>
                <p className="text-info mb-2" style={{ fontSize: "0.95rem" }}>
                  Information Technology
                </p>
                <p className="mb-0 " style={{ fontSize: "0.9rem" }}>
                  International Islamic University, Islamabad
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
