import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaUpload, FaCamera } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {

  const navigate = useNavigate();

  return (
    <section className="hero">

      <div className="hero-left">

        <motion.h1
          initial={{opacity:0,y:50}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.8}}
        >
          AI Powered
          <br />
          Plant Disease Detection
        </motion.h1>

        <motion.p
          initial={{opacity:0,y:50}}
          animate={{opacity:1,y:0}}
          transition={{delay:0.3,duration:0.8}}
        >
          Upload a leaf image and instantly detect plant diseases
          using Deep Learning. Get AI-powered treatment,
          prevention tips and expert recommendations within seconds.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:0.6}}
        >

          <button
            className="upload-btn"
            onClick={()=>navigate("/detect")}
          >
            <FaUpload />
            Upload Image
          </button>

          <button
            className="camera-btn"
            onClick={()=>navigate("/detect")}
          >
            <FaCamera />
            Use Camera
          </button>

        </motion.div>

      </div>

      <motion.div
        className="hero-right"
        animate={{
          y:[0,-15,0]
        }}
        transition={{
          repeat:Infinity,
          duration:4
        }}
      >

        <img
          src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800"
          alt="Plant"
        />

      </motion.div>

    </section>
  );

};

export default Hero;