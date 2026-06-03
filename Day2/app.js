// // Error Handling
const fs = require('fs');
let a= undefined;

try {
    console.log(a.name);
    
} catch (error) {
    // console.log(error);
    console.log("Error has occured");   
    throw new TypeError();
}

// // Try–Catch (Synchronous Error)
try {
  let result = 10 / 0;
  console.log(result);

  JSON.parse("invalid json"); // error here
} catch (err) {
  console.log("Error caught:", err.message);
}

// //2.Callback Error Handling


fs.readFile('test.txt', 'utf8', (err, data) => {
  if (err) {
    console.log("Error:", err.message);
    return;
  }
  console.log("File content:", data);
});

// //3. Promise Error Handling
const promise = new Promise((resolve, reject) => {
  let success = false;

  if (success) {
    resolve("Success");
  } else {
    reject("Something went wrong");
  }
});

// promise
//   .then((res) => console.log(res))
//   .catch((err) => console.log("Error:", err));

//   //4. Async/Await Error Handling
//     //Best and modern way 

//     async function test() {
//   try {
//     let result = await Promise.reject("Failed operation");
//     console.log(result);
//   } catch (err) {
//     console.log("Caught error:", err);
//   }
// }

// test();

//5. Throw Custom Errors

function checkAge(age) {
  if (age < 18) {
    throw new Error("You must be 18+");
  }
  return "Access granted";
}

try {
  console.log(checkAge(18));
} catch (err) {
  console.log("Error:", err.message);
}

//6.EventEmitter Error Handling
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('error', (err) => {
  console.log("Handled:", err.message);
});

emitter.emit('error', new Error("Something broke"));

//memory leak
//1.Global variale
let data = [];

function addData() {
  data.push(new Array(1000000).fill("leak"));
}

setInterval(addData, 1000);
setInterval(() => {
  let temp = new Array(1000000).fill("no leak");
  console.log(temp.length);
}, 1000);


function outer() {
  let bigData = new Array(1000000).fill("data");

  return function inner() {
    console.log("Using data");
  };
}
const fn = outer();

//Streams

//Writing streams

const writeStream = fs.createWriteStream('output.txt');

writeStream.write("Hello\n");
writeStream.write("Streaming data...\n");

writeStream.end();

writeStream.on('finish', () => {
  console.log("Writing completed");
});

//Pipe

const readStream = fs.createReadStream('output.txt');
const writeStream = fs.createWriteStream('copy.txt');

readStream.pipe(writeStream);

console.log("File copied using stream");

//-- Worker Threads--
//Without using worker threads
//Server is Frozen

console.log("Start");

let sum = 0;
for (let i = 0; i < 1e9; i++) {
  sum += i;
}

console.log("Sum:", sum);
console.log("End");









