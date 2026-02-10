import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaWordpress,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiWoo, SiPostgresql, SiGo } from "react-icons/si";
import { MdCode, MdApi, MdDevices, MdSearch } from "react-icons/md";
import { BiCodeBlock } from "react-icons/bi";

export default function Technologies() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const technologies = [
    {
      name: "React.js",
      Icon: FaReact,
      gradient: "linear-gradient(135deg, #61dafb, #21a1c4)",
      color: "#61dafb",
    },
    {
      name: "JavaScript",
      Icon: IoLogoJavascript,
      gradient: "linear-gradient(135deg, #f7df1e, #f0db4f)",
      color: "#f7df1e",
    },
    {
      name: "HTML",
      Icon: FaHtml5,
      gradient: "linear-gradient(135deg, #e34c26, #f06529)",
      color: "#e34c26",
    },
    {
      name: "CSS",
      Icon: FaCss3Alt,
      gradient: "linear-gradient(135deg, #264de4, #2965f1)",
      color: "#264de4",
    },
    {
      name: "Bootstrap",
      Icon: FaBootstrap,
      gradient: "linear-gradient(135deg, #7952b3, #563d7c)",
      color: "#7952b3",
    },
    {
      name: "WordPress",
      Icon: FaWordpress,
      gradient: "linear-gradient(135deg, #21759b, #0073aa)",
      color: "#21759b",
    },
    {
      name: "WooCommerce",
      Icon: SiWoo,
      gradient: "linear-gradient(135deg, #96588a, #7f4a7a)",
      color: "#96588a",
    },
    {
      name: "Elementor",
      Icon: MdCode,
      gradient: "linear-gradient(135deg, #d30c5c, #92003b)",
      color: "#d30c5c",
    },
    {
      name: "PostgreSQL",
      Icon: SiPostgresql,
      gradient: "linear-gradient(135deg, #336791, #2e5e82)",
      color: "#336791",
    },
    {
      name: "Golang",
      Icon: SiGo,
      gradient: "linear-gradient(135deg, #00add8, #00a29c)",
      color: "#00add8",
    },
    {
      name: "Gutenberg",
      Icon: BiCodeBlock,
      gradient: "linear-gradient(135deg, #1e1e1e, #3d3d3d)",
      color: "#3d3d3d",
    },
    {
      name: "API Development",
      Icon: MdApi,
      gradient: "linear-gradient(135deg, #ff6b6b, #ee5a6f)",
      color: "#ff6b6b",
    },
    {
      name: "Git",
      Icon: FaGitAlt,
      gradient: "linear-gradient(135deg, #f05032, #e44c30)",
      color: "#f05032",
    },
    {
      name: "GitHub",
      Icon: FaGithub,
      gradient: "linear-gradient(135deg, #333333, #181717)",
      color: "#6e7681",
    },
    {
      name: "Responsive Design",
      Icon: MdDevices,
      gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
      color: "#06b6d4",
    },
    {
      name: "SEO",
      Icon: MdSearch,
      gradient: "linear-gradient(135deg, #f59e0b, #ea580c)",
      color: "#f59e0b",
    },
  ];

  return (
    <section
      id="technologies"
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
        >
          <h2 className="text-info mb-3 display-4 fw-bold">Tools & Tech</h2>
          <div
            className="mx-auto bg-info"
            style={{ width: 80, height: 4, borderRadius: 2 }}
          />
          <h2
            className="mt-4 mb-0"
            style={{
              color: "rgba(255,255,255,.7)",
              fontSize: "1.1rem",
              maxWidth: "600px",
              margin: "20px auto 0",
              fontWeight: "bold",
            }}
          >
            Technologies I use to bring ideas to life
          </h2>
        </motion.div>

        <motion.div
          className="row g-4 justify-content-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {technologies.map((tech, idx) => (
            <div key={idx} className="col-6 col-sm-4 col-md-3 col-lg-2">
              <motion.div
                className="d-flex flex-column align-items-center justify-content-center h-100 rounded-4 p-4 border border-secondary border-opacity-25 position-relative overflow-hidden"
                style={{
                  background: "rgba(13, 110, 253, 0.03)",
                  backdropFilter: "blur(10px)",
                  minHeight: "140px",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                variants={scaleIn}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  boxShadow: `0 20px 40px ${tech.color}30`,
                  background: "rgba(13, 110, 253, 0.08)",
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background: tech.gradient,
                    opacity: 0,
                    zIndex: 0,
                  }}
                  whileHover={{ opacity: 0.12 }}
                  transition={{ duration: 0.4 }}
                />

                <motion.div
                  className="position-absolute top-0 start-0 w-100"
                  style={{
                    height: "3px",
                    background: tech.gradient,
                    opacity: 0,
                  }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <div
                  className="text-center position-relative"
                  style={{ zIndex: 1 }}
                >
                  <motion.div
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    <tech.Icon
                      style={{
                        fontSize: "2.8rem",
                        marginBottom: "12px",
                        color: "#fff",
                        filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
                      }}
                    />
                  </motion.div>
                  <h5
                    className="mb-0 fw-semibold"
                    style={{
                      fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
                      color: "#fff",
                      lineHeight: "1.4",
                      letterSpacing: "0.3px",
                    }}
                  >
                    {tech.name}
                  </h5>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
