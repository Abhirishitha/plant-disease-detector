import tensorflow as tf

print(tf.__version__)

model = tf.keras.models.load_model("plant_model.h5", compile=False)

print("Loaded Successfully")