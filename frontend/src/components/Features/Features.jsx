import { motion } from "framer-motion";
import { FaLeaf, FaRobot, FaBolt } from "react-icons/fa";
import "./Features.css";

const features = [
  {
    icon: <FaLeaf />,
    title: "95%+ Detection Accuracy",
    desc: "Powered by EfficientNet deep learning model trained on thousands of plant leaf images."
  },
  {
    icon: <FaRobot />,
    title: "AI Recommendations",
    desc: "Get disease description, symptoms, treatments and prevention using Gemini AI."
  },
  {
    icon: <FaBolt />,
    title: "Instant Analysis",
    desc: "Upload an image and receive predictions with confidence scores in seconds."
  }
];

function Features() {
  return (
    <section className="features">

      <motion.h2
        initial={{opacity:0,y:30}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6}}
      >
        Why Choose <span>LeafLens AI?</span>
      </motion.h2>

      <motion.p
        className="subtitle"
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.2}}
      >
        Built with Artificial Intelligence to help farmers,
        students and agriculture professionals detect plant
        diseases quickly and accurately.
      </motion.p>

      <div className="feature-grid">

        {features.map((item,index)=>(
          <motion.div
            className="feature-card"
            key={index}
            initial={{opacity:0,y:50}}
            whileInView={{opacity:1,y:0}}
            transition={{delay:index*0.2}}
            whileHover={{y:-12}}
          >

            <div className="feature-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Features;