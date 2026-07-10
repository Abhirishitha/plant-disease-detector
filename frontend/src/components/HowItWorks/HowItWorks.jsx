import { motion } from "framer-motion";
import { FaUpload, FaBrain, FaClipboardCheck } from "react-icons/fa";
import "./HowItWorks.css";

const steps = [
  {
    icon: <FaUpload />,
    title: "Upload Leaf Image",
    desc: "Upload a plant leaf image from your computer or capture one using your camera."
  },
  {
    icon: <FaBrain />,
    title: "AI Analysis",
    desc: "Our EfficientNet AI model analyzes the uploaded image to detect plant diseases accurately."
  },
  {
    icon: <FaClipboardCheck />,
    title: "View Results",
    desc: "Get disease prediction, confidence score, treatment suggestions and prevention tips."
  }
];

function HowItWorks() {

  return (

    <section className="works">

      <motion.h2

        initial={{opacity:0,y:30}}

        whileInView={{opacity:1,y:0}}

      >

        How It Works

      </motion.h2>

      <div className="steps">

        {steps.map((step,index)=>(

          <motion.div

            className="step"

            key={index}

            initial={{opacity:0,y:50}}

            whileInView={{opacity:1,y:0}}

            transition={{delay:index*0.2}}

            whileHover={{y:-10}}

          >

            <div className="step-icon">

              {step.icon}

            </div>

            <h3>{step.title}</h3>

            <p>{step.desc}</p>

          </motion.div>

        ))}

      </div>

    </section>

  );

}

export default HowItWorks;