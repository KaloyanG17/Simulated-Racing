import * as brain from 'brain.js';

const net = new brain.NeuralNetwork();

// Define your training data
const trainingData = [
  { input: { speed: 30, lapNumber: 1 }, output: { pitstop: true } },
  { input: { speed: 29, lapNumber: 1 }, output: { pitstop: true } },

];

// Train the neural network
net.train(trainingData);

export default net;
