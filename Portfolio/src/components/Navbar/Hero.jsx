import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="d-flex align-items-center justify-content-center vh-100 bg-dark text-light">
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.3 },
                },
              }}
            >
              <motion.h1
                className="display-4 mb-3"
                initial={{ opacity: 0, y: -50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Hi, I'm <span className="text-info">Nasir</span>
              </motion.h1>

              <motion.h2
                className="h4 fw-light mb-3"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              >
                Frontend Developer
              </motion.h2>

              <motion.p
                className="lead mb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              >
                I build modern responsive Applications using React and
                JavaScript.
              </motion.p>

              <motion.div
                className="d-flex justify-content-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <Link to="/projects" className="btn btn-info btn-lg">
                  View Projects
                </Link>
                <Link to="/contact" className="btn btn-outline-info btn-lg">
                  Contact Me
                </Link>
                <a
  href="https://drive.google.com/uc?export=download&id=1OMf3iUyJou50JidYGY2ssL7WOPONpdYB"
  className="btn btn-info btn-lg"
  rel="noopener noreferrer"
>
  Download CV
</a>

              </motion.div>
            </motion.div>
          </div>

          <div className="col-lg-6 text-center">
            <motion.img
              src="/My-Img.jpeg"
              alt="Nasir"
              className="rounded-circle border border-info img-fluid"
              style={{ maxWidth: "280px" }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 1.5,
                type: "spring",
                stiffness: 120,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
