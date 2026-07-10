import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import UploadCard from "../components/Upload/UploadCard";
import ImagePreview from "../components/ImagePreview/ImagePreview";
import Loading from "../components/Loading/Loading";

import API from "../services/api";

function Detect() {

    const navigate = useNavigate();

    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleDetect = async () => {

        if (!selectedFile) {
            alert("Please upload an image.");
            return;
        }

        setLoading(true);

        try {

            const formData = new FormData();

            formData.append("image", selectedFile);

            const response = await API.post(
                "/predict",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            );

            setLoading(false);

            navigate("/result", {
                state: response.data
            });

        }

        catch (error) {

    console.error(error);

    console.log(error.response);

    console.log(error.response?.data);

    setLoading(false);

    alert(error.response?.data?.message || error.message);

}
    };

    return (

        <>

            <Navbar />

            <div style={{ paddingTop: "120px" }}>

                <UploadCard
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                    setSelectedFile={setSelectedFile}
                />

                <ImagePreview
                    image={selectedImage}
                    setSelectedImage={setSelectedImage}
                    onDetect={handleDetect}
                    loading={loading}
                />

                {loading && <Loading />}

            </div>

        </>

    );

}

export default Detect;