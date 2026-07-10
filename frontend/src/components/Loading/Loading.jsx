import { motion } from "framer-motion";
import { FaLeaf } from "react-icons/fa";
import "./Loading.css";

function Loading() {
  return (
    <div className="loading-container">

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
      >
        <FaLeaf className="loading-icon" />
      </motion.div>

      <h2>Detecting Disease...</h2>

      <p>Please wait while AI analyzes your image.</p>

      <div className="loading-bar">
        <motion.div
          className="progress"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
      </div>

    </div>
  );
}

export default Loading;