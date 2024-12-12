const tf = require('@tensorflow/tfjs-node');
const path = require('path');

// Muat model ML
const loadModel = async () => {
  const modelPath = path.join(__dirname, '../model.json'); 
  const model = await tf.loadLayersModel(`file://${modelPath}`);
  return model;
};

// Prediksi menggunakan model
const predict = async (imageBuffer) => {
  const model = await loadModel();

  // Konversi buffer gambar ke tensor
  const imageTensor = tf.node.decodeImage(imageBuffer).resizeNearestNeighbor([224, 224]).toFloat().expandDims(0);

  // Prediksi
  const prediction = model.predict(imageTensor);
  const result = prediction.arraySync();
  return result;
};

module.exports = { loadModel, predict };
