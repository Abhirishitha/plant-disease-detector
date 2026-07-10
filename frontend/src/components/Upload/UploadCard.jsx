import { useRef } from "react";
import { motion } from "framer-motion";
import { FaUpload, FaCamera } from "react-icons/fa";
import "./UploadCard.css";

function UploadCard({
  selectedImage,
  setSelectedImage,
  setSelectedFile
}) {

  const fileInput = useRef();

  const handleFile = (file) => {

    if (!file) return;

    // Save the original file for Flask
    setSelectedFile(file);

    // Preview image
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    reader.readAsDataURL(file);

  };

  const handleChange = (e) => {
    handleFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  };

  return (

    <motion.div
      className="upload-card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >

      <div
        className="drop-area"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >

        <FaUpload className="upload-icon" />

        <h2>Drag & Drop Leaf Image</h2>

        <p>or</p>

        <button
          type="button"
          onClick={() => fileInput.current.click()}
        >
          Browse Files
        </button>

        <input
          type="file"
          accept="image/*"
          hidden
          ref={fileInput}
          onChange={handleChange}
        />

        <label className="camera-btn">

          <FaCamera />

          Camera

          <input
            hidden
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleChange}
          />

        </label>

      </div>

    </motion.div>

  );

}

export default UploadCard;