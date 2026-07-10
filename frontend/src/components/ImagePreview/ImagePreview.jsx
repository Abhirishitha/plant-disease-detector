import { motion } from "framer-motion";
import { FaTrash, FaSearch } from "react-icons/fa";
import "./ImagePreview.css";

function ImagePreview({
  image,
  setSelectedImage,
  onDetect,
  loading
}) {

  if (!image) return null;

  return (
    <motion.div
      className="preview-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2>Image Preview</h2>

      <img src={image} alt="preview" />

      <div className="preview-buttons">

        <button
          className="detect-btn"
          onClick={onDetect}
          disabled={loading}
        >
          <FaSearch />
          {loading ? "Detecting..." : "Detect Disease"}
        </button>

        <button
          className="remove-btn"
          onClick={() => setSelectedImage(null)}
        >
          <FaTrash />
          Remove
        </button>

      </div>

    </motion.div>
  );
}

export default ImagePreview;