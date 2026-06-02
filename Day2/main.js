const { Worker } = require('worker_threads');

console.log("Start");

const worker = new Worker('./worker_threads.js');

worker.on('message', (result) => {
  console.log("Sum:", result);
});

console.log("End");

