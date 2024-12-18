// services/prediction.js

const tf = require('@tensorflow/tfjs-node'); 
const loadModel = require('./modelLoader');

async function makePrediction(model, inputData) {
  const inputTensor = tf.tensor(inputData); // Membuat tensor dari input
  const prediction = model.predict(inputTensor); // Memanggil prediksi dari model
  prediction.print(); // Menampilkan hasil prediksi
}

// Contoh input data
const inputData = [/* data sesuai dengan input model */];

loadModel().then(model => makePrediction(model, inputData));
