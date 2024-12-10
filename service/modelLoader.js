// services/modelLoader.js

const tf = require('@tensorflow/tfjs-node'); // pastikan sudah mengimport tfjs-node

const modelPath = 'file://./model.json'; // Menggunakan path relatif jika file berada di folder yang sama


async function loadModel() {
  const model = await tf.loadLayersModel(modelPath);
  console.log('Model loaded');
  return model;
}

module.exports = loadModel; // export fungsi untuk digunakan di tempat lain
