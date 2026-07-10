import { motion } from "framer-motion";
import "./ResultCard.css";

function ResultCard({ disease, confidence }) {

  return (

    <motion.div

      className="result-card"

      initial={{ opacity: 0, y: 50 }}

      animate={{ opacity: 1, y: 0 }}

    >

      <h2>Disease Detection Result</h2>

      <h1>{disease}</h1>

      <p>

        AI has analyzed your uploaded leaf image.

      </p>

    </motion.div>

  );

}

export default ResultCard;