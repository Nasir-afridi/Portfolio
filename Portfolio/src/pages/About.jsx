import { motion } from "framer-motion";

const About = () => {
  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
  const fadeInLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } };
  const fadeInRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

  const cardStyle = {
    background: "linear-gradient(135deg, rgba(13,110,253,.05), rgba(13,110,253,.02))",
    transition: "transform .3s ease, box-shadow .3s ease",
    cursor: "pointer",
  };

  const topBar = {
    height: 6,
    background: "linear-gradient(135deg,#4facfe,#00f2fe)",
    borderRadius: 3,
    marginBottom: 18,
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

        {/* Header */}
        <motion.div
          className="text-center mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-info mb-3 display-4 fw-bold">
            About Me
          </h2>
          <div className="mx-auto bg-info" style={{ width: 80, height: 4, borderRadius: 2 }} />
        </motion.div>

        {/* Intro */}
        <motion.p
          className="lead mb-5 px-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          style={{
            fontSize: "1.05rem",
            maxWidth: 800,
            margin: "0 auto 3rem",
            color: "rgba(255,255,255,.9)",
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
          </span>.
        </motion.p>

        {/* Row 1 */}
        <motion.div
          className="row g-4 mb-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {/* What I Bring */}
          <div className="col-lg-6">
            <motion.div
              className="h-100 p-4 rounded-3 shadow-lg border border-secondary border-opacity-25"
              style={cardStyle}
              variants={fadeInLeft}
              whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(13,110,253,.15)" }}
            >
              <div style={topBar} />
              <h4 className="text-info mb-3 fw-bold">What I Bring</h4>

              <ul className="list-unstyled mb-0">
                {[
                  "Performance-optimized websites",
                  "Mobile-first responsive design",
                  "API integrations & dynamic content",
                  "SEO-friendly structure",
                  "Clean & maintainable code",
                ].map((item, i) => (
                  <li key={i} className="mb-2 d-flex">
                    <span className="text-info me-2">▹</span>
                    <span style={{ color: "rgba(255,255,255,.85)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Future Goal */}
          <div className="col-lg-6">
            <motion.div
              className="h-100 p-4 rounded-3 shadow-lg border border-secondary border-opacity-25"
              style={cardStyle}
              variants={fadeInRight}
              whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(13,110,253,.15)" }}
            >
              <div style={topBar} />
              <h4 className="text-info mb-3 fw-bold">Future Goal</h4>

              <p style={{ fontSize: ".95rem", color: "rgba(255,255,255,.85)" }}>
                Expand toward <span className="text-info fw-semibold">
                  full-stack development
                </span>
                {" "}and{" "}
                <span className="text-info fw-semibold">
                  scalable application architecture
                </span>
                , building end-to-end solutions that deliver exceptional user
                experiences and robust backend systems.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Row 2 */}
        <motion.div
          className="row g-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {/* Experience */}
          <div className="col-lg-6">
            <motion.div
              className="h-100 p-4 rounded-3 shadow-lg border border-secondary border-opacity-25"
              style={cardStyle}
              variants={fadeInLeft}
              whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(13,110,253,.15)" }}
            >
              <div style={topBar} />
              <h4 className="text-info mb-3 fw-bold">Experience</h4>

              <h5 className="mb-1">Capregsoft Private Limited</h5>
              <p className="mb-1">Frontend Developer (Internship)</p>
              <p className="mb-3" style={{ fontSize: ".85rem" }}>
                June 2025 - December 2025
              </p>

              <ul className="list-unstyled mb-0">
                {[
                  "Built React.js UIs with lazy loading, reducing load time by 40%",
                  "Customized WordPress themes with SEO optimization (meta tags, schema, alt text)",
                  "Designed mobile-first Elementor landing pages, increasing mobile traffic by 25%",
                  "Integrated REST APIs in React & WordPress for real-time content delivery",
                  "Ensured responsive UX across all devices, lowering bounce rate",
                ].map((item, i) => (
                  <li key={i} className="mb-2 d-flex">
                    <span className="text-info me-2">▹</span>
                    <span style={{ color: "rgba(255,255,255,.85)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Education */}
          <div className="col-lg-6">
            <motion.div
              className="h-100 p-4 rounded-3 shadow-lg border border-secondary border-opacity-25"
              style={cardStyle}
              variants={fadeInRight}
              whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(13,110,253,.15)" }}
            >
              <div style={topBar} />
              <h4 className="text-info mb-3 fw-bold">Education</h4>

              <h5 className="mb-1">
                Diploma of Associate Engineering.
              </h5>

              <p className="text-info mb-1">
                Information Technology
              </p>

              <p className="mb-1">
                International Islamic University, Islamabad
              </p>

              <p style={{ fontSize: ".85rem" }}>
                Sep 2022 - June 2025
              </p>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
