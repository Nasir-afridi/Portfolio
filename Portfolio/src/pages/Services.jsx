import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaReact,
  FaWordpress,
  FaMobileAlt,
  FaPlug,
  FaRocket,
  FaShoppingCart,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const Services = () => {
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
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const services = [
    {
      id: 1,
      Icon: FaReact,
      title: "React Development",
      description:
        "Building dynamic, responsive UIs with React.js, implementing lazy loading and optimizing performance for 40% faster load times.",
      features: [
        "Component Architecture",
        "State Management",
        "API Integration",
        "Performance Optimization",
      ],
      gradient: "linear-gradient(135deg, #61dafb, #21a1c4)",
      color: "#61dafb",
    },
    {
      id: 2,
      Icon: FaWordpress,
      title: "WordPress Development",
      description:
        "Custom WordPress solutions with WooCommerce, Elementor, and SEO optimization to boost Google rankings and mobile traffic.",
      features: [
        "Theme Customization",
        "E-commerce Setup",
        "SEO Implementation",
        "Plugin Development",
      ],
      gradient: "linear-gradient(135deg, #21759b, #0073aa)",
      color: "#21759b",
    },
    {
      id: 3,
      Icon: FaMobileAlt,
      title: "Responsive Design",
      description:
        "Mobile-first approach ensuring seamless UX across all devices, reducing bounce rates and increasing user engagement.",
      features: [
        "Mobile-First Design",
        "Cross-Browser Testing",
        "UI/UX Optimization",
        "Accessibility Standards",
      ],
      gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
      color: "#06b6d4",
    },
    {
      id: 4,
      Icon: FaPlug,
      title: "API Integration",
      description:
        "Seamless API integration in React and WordPress for real-time, SEO-safe content delivery and enhanced functionality.",
      features: [
        "RESTful APIs",
        "JWT Authentication",
        "Real-time Data",
        "Third-party Services",
      ],
      gradient: "linear-gradient(135deg, #ff6b6b, #ee5a6f)",
      color: "#ff6b6b",
    },
    {
      id: 5,
      Icon: FaRocket,
      title: "Performance Optimization",
      description:
        "Speed optimization techniques including code splitting, lazy loading, and caching to deliver lightning-fast web experiences.",
      features: [
        "Code Splitting",
        "Asset Optimization",
        "Caching Strategies",
        "Core Web Vitals",
      ],
      gradient: "linear-gradient(135deg, #f59e0b, #ea580c)",
      color: "#f59e0b",
    },
    {
      id: 6,
      Icon: FaShoppingCart,
      title: "E-commerce Solutions",
      description:
        "Complete e-commerce platforms with WooCommerce, custom checkout flows, payment integration, and inventory management.",
      features: [
        "WooCommerce Setup",
        "Payment Gateway",
        "Product Management",
        "Order Tracking",
      ],
      gradient: "linear-gradient(135deg, #96588a, #7f4a7a)",
      color: "#96588a",
    },
  ];

  return (
    <section
      id="services"
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
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-info mb-3 display-4 fw-bold">
            Services & Expertise
          </h2>
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
            Transforming ideas into powerful digital experiences
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="row g-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              scaleIn={scaleIn}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-5 pt-5"
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
              }}
            />

            <div className="position-relative" style={{ zIndex: 1 }}>
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
                Let's collaborate and create something amazing together with
                cutting-edge solutions.
              </p>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <motion.button
                  className="btn btn-info fw-semibold d-inline-flex align-items-center gap-2"
                  style={{
                    fontSize: "1rem",
                    minWidth: "200px",
                    borderRadius: "12px",
                    padding: "14px 28px",
                    border: "none",
                    cursor: "pointer",
                  }}
                  whileHover={{
                    scale: 1.08,
                    y: -3,
                    boxShadow: "0 15px 35px rgba(13,202,240,0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Let's Talk
                  <FaArrowRight size={18} />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Service Card Component
const ServiceCard = ({ service, index, scaleIn }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="col-lg-4 col-md-6">
      <motion.div
        className="h-100 position-relative"
        variants={scaleIn}
        style={{
          perspective: "1000px",
          minHeight: "450px",
        }}
      >
        <motion.div
          className="position-relative w-100 h-100"
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
        >
          {/* Front of Card */}
          <motion.div
            className="rounded-4 p-4 border border-secondary border-opacity-25 position-absolute w-100 h-100"
            style={{
              background: "rgba(13, 110, 253, 0.03)",
              backdropFilter: "blur(10px)",
              backfaceVisibility: "hidden",
              cursor: "pointer",
            }}
            whileHover={{
              background: "rgba(13, 110, 253, 0.08)",
            }}
          >
            <div className="d-flex flex-column h-100">
              {/* Icon & Top Border */}
              <div className="position-relative mb-4">
                <div
                  className="position-absolute top-0 start-0 w-100"
                  style={{
                    height: "3px",
                    background: service.gradient,
                    borderRadius: "2px",
                  }}
                />
                <motion.div
                  className="mt-4"
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  <service.Icon
                    style={{
                      fontSize: "3.5rem",
                      color: service.color,
                      filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.3))",
                    }}
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-grow-1">
                <h3
                  className="mb-3 fw-bold"
                  style={{
                    fontSize: "1.5rem",
                    color: "#fff",
                    lineHeight: "1.3",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,.7)",
                    fontSize: "0.95rem",
                    lineHeight: "1.7",
                  }}
                >
                  {service.description}
                </p>
              </div>

              {/* Hover Indicator */}
              <div
                className="d-flex align-items-center gap-2 mt-3"
                style={{
                  color: "#0dcaf0",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                }}
              >
                <span>View Features</span>
                <FaArrowRight size={14} />
              </div>
            </div>

            {/* Gradient Background Overlay */}
            <div
              className="position-absolute top-0 start-0 w-100 h-100 rounded-4"
              style={{
                background: service.gradient,
                opacity: 0.05,
                pointerEvents: "none",
              }}
            />
          </motion.div>

          {/* Back of Card */}
          <motion.div
            className="rounded-4 p-4 border border-secondary border-opacity-25 position-absolute w-100 h-100"
            style={{
              background: service.gradient,
              backdropFilter: "blur(10px)",
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              cursor: "pointer",
            }}
          >
            <div className="d-flex flex-column h-100 justify-content-between">
              <div>
                <h4
                  className="mb-4 fw-bold"
                  style={{
                    fontSize: "1.3rem",
                    color: "#fff",
                  }}
                >
                  Key Features
                </h4>
                <ul className="list-unstyled">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="d-flex align-items-start gap-3 mb-3 pb-3"
                      style={{
                        borderBottom:
                          idx < service.features.length - 1
                            ? "1px solid rgba(255,255,255,0.2)"
                            : "none",
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isFlipped
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -20 }
                      }
                      transition={{ delay: idx * 0.1 }}
                    >
                      <FaCheckCircle
                        style={{
                          fontSize: "1.2rem",
                          color: "#fff",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      />
                      <span
                        style={{
                          color: "rgba(255,255,255,0.95)",
                          fontSize: "0.95rem",
                          lineHeight: "1.5",
                        }}
                      >
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.button
                className="btn w-100 fw-semibold"
                style={{
                  background: "rgba(255,255,255,0.95)",
                  color: "#212529",
                  border: "none",
                  borderRadius: "12px",
                  padding: "12px",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 8px 20px rgba(255,255,255,0.3)",
                }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = "/contact";
                  }
                }}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
