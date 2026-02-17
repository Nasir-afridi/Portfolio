import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaArrowRight,
  FaDownload,
  FaCode,
} from "react-icons/fa";
import { MdWork } from "react-icons/md";

export default function Contact() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const contactInfo = [
    {
      Icon: FaEnvelope,
      label: "Email",
      value: "nasirwc05@gmail.com",
      href: "mailto:nasirwc05@gmail.com",
      gradient: "linear-gradient(135deg, #ff6b6b, #ee5a6f)",
      color: "#ff6b6b",
    },
    {
      Icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+92 318 7295615",
      href: "https://wa.me/923187295615",
      gradient: "linear-gradient(135deg, #25d366, #128c7e)",
      color: "#25d366",
    },
    {
      Icon: FaPhone,
      label: "Phone",
      value: "+92 318 7295615",
      href: "tel:+923187295615",
      gradient: "linear-gradient(135deg, #f59e0b, #ea580c)",
      color: "#f59e0b",
    },
    {
      Icon: FaMapMarkerAlt,
      label: "Location",
      value: "Islamabad, Pakistan",
      href: "https://maps.google.com/?q=Islamabad,Pakistan",
      gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
      color: "#06b6d4",
    },
  ];

  const socialLinks = [
    {
      Icon: FaGithub,
      label: "GitHub",
      value: "github.com/nasir-afridi",
      href: "https://github.com/nasir-afridi",
      gradient: "linear-gradient(135deg, #6e7681, #333333)",
      color: "#6e7681",
      desc: "Check my projects",
    },
    {
      Icon: FaLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/nasir-afridi",
      href: "https://linkedin.com/in/nasir-afridi",
      gradient: "linear-gradient(135deg, #0077b5, #005582)",
      color: "#0077b5",
      desc: "Connect with me",
    },
  ];

  return (
    <section
      id="contact"
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
          <h2 className="text-info mb-3 display-4 fw-bold">Get In Touch</h2>
          <div
            className="mx-auto bg-info"
            style={{ width: 80, height: 4, borderRadius: 2 }}
          />
          <p
            className="mt-4 mb-0 mx-auto fw-bold"
            style={{
              color: "rgba(255,255,255,.7)",
              fontSize: "1.1rem",
              maxWidth: "600px",
            }}
          >
            Have a project in mind? Let's build something amazing together
          </p>
        </motion.div>

        <motion.div
          className="row g-3 justify-content-center mb-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {contactInfo.map((item, idx) => (
            <div key={idx} className="col-6 col-sm-6 col-md-3">
              <motion.div variants={scaleIn} className="h-100">
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <ContactCard item={item} />
                </a>
              </motion.div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="row g-3 justify-content-center mb-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {socialLinks.map((item, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-md-5">
              <motion.div variants={scaleIn}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <motion.div
                    className="d-flex align-items-center gap-3 rounded-4 p-4 border border-secondary border-opacity-25 position-relative overflow-hidden"
                    style={{
                      background: "rgba(13,110,253,0.03)",
                      backdropFilter: "blur(10px)",
                      cursor: "pointer",
                    }}
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                      boxShadow: `0 20px 40px ${item.color}30`,
                      background: "rgba(13,110,253,0.08)",
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <motion.div
                      className="position-absolute top-0 start-0 w-100 h-100"
                      style={{
                        background: item.gradient,
                        opacity: 0,
                        zIndex: 0,
                      }}
                      whileHover={{ opacity: 0.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="position-absolute top-0 start-0 w-100"
                      style={{
                        height: "3px",
                        background: item.gradient,
                        opacity: 0,
                      }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    <div
                      className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 position-relative"
                      style={{
                        width: "56px",
                        height: "56px",
                        background: item.gradient,
                        zIndex: 1,
                      }}
                    >
                      <item.Icon
                        style={{ fontSize: "1.6rem", color: "#fff" }}
                      />
                    </div>

                    <div className="position-relative" style={{ zIndex: 1 }}>
                      <p
                        className="mb-0 fw-bold"
                        style={{
                          color: "#0dcaf0",
                          fontSize: "1rem",
                          letterSpacing: "0.3px",
                        }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="mb-0"
                        style={{
                          color: "rgba(255,255,255,.6)",
                          fontSize: "0.85rem",
                        }}
                      >
                        {item.value}
                      </p>
                      <p
                        className="mb-0"
                        style={{
                          color: "rgba(255,255,255,.4)",
                          fontSize: "0.78rem",
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>

                    <motion.div
                      className="ms-auto position-relative"
                      style={{ zIndex: 1 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaArrowRight
                        style={{
                          color: "rgba(255,255,255,.3)",
                          fontSize: "1rem",
                        }}
                      />
                    </motion.div>
                  </motion.div>
                </a>
              </motion.div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <div
            className="p-5 rounded-4 shadow-lg border border-secondary border-opacity-25 mx-auto text-center position-relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(13,110,253,.10), rgba(13,110,253,.03))",
              maxWidth: "900px",
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              className="position-absolute"
              style={{
                top: "-50%",
                right: "-20%",
                width: "400px",
                height: "400px",
                background:
                  "radial-gradient(circle, rgba(13,110,253,0.15) 0%, transparent 70%)",
                borderRadius: "50%",
                filter: "blur(60px)",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />
            <div
              className="position-absolute"
              style={{
                bottom: "-30%",
                left: "-10%",
                width: "300px",
                height: "300px",
                background:
                  "radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 70%)",
                borderRadius: "50%",
                filter: "blur(60px)",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />

            <div className="position-relative" style={{ zIndex: 1 }}>
              <motion.div
                className="mb-4"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span
                  className="badge rounded-pill px-3 py-2"
                  style={{
                    background: "rgba(37,211,102,0.15)",
                    border: "1px solid rgba(37,211,102,0.4)",
                    color: "#25d366",
                    fontSize: "0.85rem",
                    fontWeight: "600",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "8px",
                      height: "8px",
                      background: "#25d366",
                      borderRadius: "50%",
                      marginRight: "8px",
                      animation: "pulse-dot 1.5s ease-in-out infinite",
                    }}
                  />
                  Available for Work
                </span>
              </motion.div>

              <h5
                className="text-info mb-3 fw-bold"
                style={{ fontSize: "clamp(1.8rem,4vw,2.5rem)" }}
              >
                Ready to bring your project to life?
              </h5>
              <p
                className="mb-4 mx-auto"
                style={{
                  color: "rgba(255,255,255,.85)",
                  fontSize: "clamp(1rem,2vw,1.15rem)",
                  maxWidth: "620px",
                  lineHeight: "1.7",
                }}
              >
                I'm currently available for freelance projects and internship
                opportunities. Let's collaborate and create something amazing
                together!
              </p>

              <div className="d-flex flex-wrap justify-content-center gap-3">
                <motion.a
                  href="https://wa.me/923187295615?text=Hi%20Nasir!%20I%20visited%20your%20portfolio%20and%20I'd%20like%20to%20hire%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-info fw-semibold d-inline-flex align-items-center gap-2"
                  style={{
                    fontSize: "1rem",
                    minWidth: "180px",
                    borderRadius: "12px",
                    padding: "14px 28px",
                    textDecoration: "none",
                  }}
                  whileHover={{
                    scale: 1.08,
                    y: -3,
                    boxShadow: "0 15px 35px rgba(13,202,240,0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <MdWork size={20} />
                  Hire Me
                </motion.a>

                <motion.button
                  onClick={() => {
                    const to = "nasirwc05@gmail.com";
                    const subject = "Project Inquiry - Portfolio";
                    const body =
                      "Hi Nasir,\n\nI visited your portfolio and would like to discuss a project with you.\n\nProject Details:\n\n";
                    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    const newTab = window.open(gmailUrl, "_blank");
                    if (
                      !newTab ||
                      newTab.closed ||
                      typeof newTab.closed === "undefined"
                    ) {
                      window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    }
                  }}
                  className="btn fw-semibold d-inline-flex align-items-center gap-2"
                  style={{
                    fontSize: "1rem",
                    minWidth: "180px",
                    borderRadius: "12px",
                    padding: "14px 28px",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                  whileHover={{
                    scale: 1.08,
                    y: -3,
                    background: "rgba(255,255,255,0.12)",
                    boxShadow: "0 15px 35px rgba(255,255,255,0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaEnvelope size={18} />
                  Email Me
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }
      `}</style>
    </section>
  );
}

function ContactCard({ item }) {
  return (
    <motion.div
      className="d-flex flex-column align-items-center justify-content-center rounded-4 p-3 border border-secondary border-opacity-25 position-relative overflow-hidden h-100"
      style={{
        background: "rgba(13,110,253,0.03)",
        backdropFilter: "blur(10px)",
        minHeight: "140px",
        cursor: "pointer",
      }}
      whileHover={{
        y: -10,
        scale: 1.05,
        boxShadow: `0 20px 40px ${item.color}30`,
        background: "rgba(13,110,253,0.08)",
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ background: item.gradient, opacity: 0, zIndex: 0 }}
        whileHover={{ opacity: 0.12 }}
        transition={{ duration: 0.4 }}
      />
      <motion.div
        className="position-absolute top-0 start-0 w-100"
        style={{ height: "3px", background: item.gradient, opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <div className="text-center position-relative" style={{ zIndex: 1 }}>
        <motion.div
          whileHover={{
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.5 },
          }}
        >
          <item.Icon
            style={{
              fontSize: "2.4rem",
              marginBottom: "10px",
              color: "#fff",
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
            }}
          />
        </motion.div>
        <p
          className="mb-0 fw-bold"
          style={{
            fontSize: "0.8rem",
            color: "#0dcaf0",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
          }}
        >
          {item.label}
        </p>
        <p
          className="mb-0"
          style={{
            fontSize: "clamp(0.7rem,1.8vw,0.82rem)",
            color: "rgba(255,255,255,.7)",
            lineHeight: "1.4",
            marginTop: "3px",
          }}
        >
          {item.value}
        </p>
      </div>
    </motion.div>
  );
}
