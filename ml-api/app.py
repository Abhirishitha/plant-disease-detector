from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import os

from predict import predict_disease
from ai_service import get_ai_recommendation

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@app.route("/")
def home():
    return jsonify({
        "message": "Plant Disease Detection API is running"
    })


@app.route("/predict", methods=["POST"])
def predict():

    if "image" not in request.files:
        return jsonify({
            "success": False,
            "message": "No image uploaded."
        }), 400

    file = request.files["image"]

    if file.filename == "":
        return jsonify({
            "success": False,
            "message": "No image selected."
        }), 400

    try:

        image = Image.open(file)

        prediction = predict_disease(image)

        ai_result = get_ai_recommendation(
            prediction["disease"],
            prediction["confidence"]
        )

        return jsonify({

            "success": True,

            "prediction": prediction,

            "ai": ai_result

        })

    except Exception as e:

        return jsonify({

            "success": False,

            "message": str(e)

        }), 500


if __name__ == "__main__":
    app.run(debug=True)