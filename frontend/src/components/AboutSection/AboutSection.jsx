import { motion } from "framer-motion";
import {
  FaLeaf,
  FaBrain,
  FaSeedling,
  FaCheckCircle,
} from "react-icons/fa";
import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about-section">

      <div className="about-container">

        {/* Left Content */}

        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <span className="about-tag">
            ABOUT LEAFLENS AI
          </span>

          <h2>
            Smarter Plant Care
            <span> Using Artificial Intelligence</span>
          </h2>

          <p>
            LeafLens AI is an intelligent plant disease detection
            platform that helps farmers, gardeners and agriculture
            students identify plant diseases simply by uploading
            a leaf image.
          </p>

          <p>
            Our deep learning model analyzes the image and provides
            accurate disease prediction along with treatment,
            prevention tips and farming guidance.
          </p>

          <div className="about-list">

            <div>
              <FaCheckCircle />
              Deep Learning Powered
            </div>

            <div>
              <FaCheckCircle />
              Fast Disease Detection
            </div>

            <div>
              <FaCheckCircle />
              AI Recommendations
            </div>

            <div>
              <FaCheckCircle />
              Farmer Friendly
            </div>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="circle big">

            <FaLeaf />

          </div>

          <div className="circle">

            <FaBrain />

          </div>

          <div className="circle">

            <FaSeedling />

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default AboutSection;