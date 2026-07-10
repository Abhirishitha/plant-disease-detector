import tensorflow as tf
import numpy as np
import json
from PIL import Image
from tensorflow.keras.applications.efficientnet import preprocess_input

IMG_SIZE = 224

model = tf.keras.models.load_model("best_model.keras")

with open("class_mapping.json", "r") as f:
    class_mapping = json.load(f)

def preprocess_image(image):
    image = image.convert("RGB")
    image = image.resize((IMG_SIZE, IMG_SIZE))

    image = np.array(image)
    image = preprocess_input(image)

    image = np.expand_dims(image, axis=0)

    return image


def predict_disease(image):

    processed = preprocess_image(image)

    prediction = model.predict(processed, verbose=0)

    predicted_index = np.argmax(prediction)

    confidence = float(np.max(prediction)) * 100

    top3 = prediction[0].argsort()[-3:][::-1]

    top_predictions = []

    for idx in top3:

        top_predictions.append({
            "disease": class_mapping[str(idx)],
            "confidence": round(float(prediction[0][idx]) * 100, 2)
        })

    return {

        "disease": class_mapping[str(predicted_index)],

        "confidence": round(confidence, 2),

        "top_predictions": top_predictions
    }