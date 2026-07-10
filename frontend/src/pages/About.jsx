import { motion } from "framer-motion";
import {
  FaLeaf,
  FaBrain,
  FaRobot,
  FaSeedling,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGithub,
} from "react-icons/fa";

function About() {
  return (
    <>
      <style>{`
      body{
        background:#F5FFF5;
      }

      .about-page{
        padding-top:110px;
        min-height:100vh;
      }

      .hero{
        width:90%;
        margin:auto;
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:60px;
        padding:60px 0;
      }

      .left{
        flex:1;
      }

      .left span{
        color:#2E7D32;
        font-weight:600;
        letter-spacing:2px;
      }

      .left h1{
        font-size:55px;
        margin:20px 0;
        color:#1f2937;
      }

      .left p{
        line-height:1.9;
        font-size:18px;
        color:#555;
      }

      .right{
        flex:1;
        display:flex;
        justify-content:center;
      }

      .circle{
        width:300px;
        height:300px;
        border-radius:50%;
        background:linear-gradient(135deg,#2E7D32,#81C784);
        display:flex;
        justify-content:center;
        align-items:center;
        color:white;
        font-size:120px;
        box-shadow:0 25px 50px rgba(46,125,50,.3);
      }

      .section{
        width:90%;
        margin:80px auto;
      }

      .section h2{
        text-align:center;
        margin-bottom:50px;
        color:#2E7D32;
        font-size:40px;
      }

      .cards{
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
        gap:30px;
      }

      .card{
        background:white;
        padding:35px;
        border-radius:20px;
        text-align:center;
        box-shadow:0 10px 25px rgba(0,0,0,.08);
        transition:.4s;
      }

      .card:hover{
        transform:translateY(-10px);
        box-shadow:0 20px 35px rgba(46,125,50,.25);
      }

      .icon{
        font-size:55px;
        color:#2E7D32;
        margin-bottom:20px;
      }

      .card h3{
        margin-bottom:15px;
      }

      .card p{
        color:#666;
        line-height:1.7;
      }

      .tech-grid{
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
        gap:25px;
      }

      .tech{
        background:white;
        padding:25px;
        border-radius:15px;
        text-align:center;
        box-shadow:0 10px 20px rgba(0,0,0,.08);
      }

      .tech svg{
        font-size:50px;
        color:#2E7D32;
        margin-bottom:15px;
      }

      .mission{
        background:white;
        padding:50px;
        border-radius:25px;
        box-shadow:0 15px 30px rgba(0,0,0,.08);
      }

      .mission h3{
        color:#2E7D32;
        margin-bottom:20px;
      }

      .mission p{
        line-height:2;
        color:#555;
      }

      .developer{
        background:white;
        padding:40px;
        border-radius:20px;
        text-align:center;
        box-shadow:0 10px 25px rgba(0,0,0,.08);
      }

      .developer h3{
        margin-bottom:10px;
      }

      .developer p{
        color:#666;
        margin-bottom:20px;
      }

      .github{
        display:inline-flex;
        align-items:center;
        gap:10px;
        background:#2E7D32;
        color:white;
        padding:14px 28px;
        border-radius:40px;
        text-decoration:none;
      }

      @media(max-width:900px){

      .hero{
        flex-direction:column;
        text-align:center;
      }

      .left h1{
        font-size:40px;
      }

      .circle{
        width:220px;
        height:220px;
        font-size:90px;
      }

      }
      `}</style>

      <div className="about-page">

        <motion.section
          className="hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="left">

            <span>ABOUT LEAFLENS AI</span>

            <h1>AI Powered Plant Disease Detection</h1>

            <p>
              LeafLens AI is an intelligent web application that helps
              farmers, gardeners and agriculture students detect plant
              diseases from leaf images. It combines Deep Learning with
              Generative AI to provide accurate predictions along with
              treatment recommendations and prevention tips.
            </p>

          </div>

          <div className="right">

            <motion.div
              className="circle"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <FaLeaf />
            </motion.div>

          </div>
        </motion.section>

        <section className="section">

          <h2>Why Choose LeafLens AI?</h2>

          <div className="cards">

            <div className="card">
              <FaBrain className="icon" />
              <h3>Deep Learning</h3>
              <p>
                EfficientNet model trained on PlantVillage dataset for
                disease prediction.
              </p>
            </div>

            <div className="card">
              <FaRobot className="icon" />
              <h3>AI Recommendations</h3>
              <p>
                Gemini AI provides symptoms, treatment and prevention
                suggestions.
              </p>
            </div>

            <div className="card">
              <FaSeedling className="icon" />
              <h3>Farmer Friendly</h3>
              <p>
                Simple interface with quick disease detection and
                confidence score.
              </p>
            </div>

          </div>

        </section>

        <section className="section">

          <h2>Technology Stack</h2>

          <div className="tech-grid">

            <div className="tech">
              <FaReact />
              <h3>React</h3>
            </div>

            <div className="tech">
              <FaNodeJs />
              <h3>Node.js</h3>
            </div>

            <div className="tech">
              <FaPython />
              <h3>Flask API</h3>
            </div>

            <div className="tech">
              <FaDatabase />
              <h3>MongoDB</h3>
            </div>

          </div>

        </section>

        <section className="section">

          <div className="mission">

            <h3>Our Mission</h3>

            <p>
              Our mission is to make plant disease detection simple,
              affordable and accessible for everyone. By combining
              Artificial Intelligence and agriculture, we aim to help
              farmers protect crops, reduce losses and improve food
              production.
            </p>

          </div>

        </section>

        <section className="section">

          <div className="developer">

            <h3>Developed By</h3>

            <p>
              B.Tech Computer Science Student | MERN Stack Developer |
              AI Enthusiast
            </p>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              <FaGithub />
              View GitHub
            </a>

          </div>

        </section>

      </div>
    </>
  );
}

export default About;