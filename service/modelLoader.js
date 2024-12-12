// services/modelLoader.js

const tf = require('@tensorflow/tfjs-node'); 

const modelPath = 'file://./model.json'; 


async function loadModel() {
  const model = await tf.loadLayersModel(modelPath);
  console.log('Model loaded');
  return model;
}

module.exports = loadModel; 
