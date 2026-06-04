//import the file system module
const fs=require("fs");
//import the custom logger service
const Logger = require("./Logger/loggerr");
//import node.js eventemitter
const Eventemitter=require("events")
//name of the large file to create
const fileName='largeFile.txt';

//create an eventemitter object
const emitter=new Eventemitter()
//check whether the file  already exist
if(!fs.existsSync(fileName)){
    //create write stream to generate the large file
 const stream=fs.createWriteStream(fileName,'utf-8');
     Logger.info("Large file created started");
   //this creates a very large file for testing streams
    for(let i=0;i<10000000;i++){
        stream.write("This is Example for Larger file.\n");
        stream.end();
    }  

    //create a one-time event listener
     emitter.once("fileCreated", () => {
        Logger.info("Large file created successfully");
      });
   //trigger the filecreated event
    emitter.emit("fileCreated");
    
}else{
     // If the file already exists, don't create it again
   Logger.info("File already exists");
}
//!!!---Reading the file without stream
// This loads the entire file into memory
// Not recommended for large files

// fs.readFile(fileName, "utf8", (err, data) => {
//   console.log(data);
// });


//!!!-----Reading the file using Streams
//streams read the file chunk by chunk

const readStream=fs.createReadStream(fileName,'utf-8');
//!!!---create a stream to write the copied content
const writeStream=fs.createWriteStream('./copyLargerfile.txt','utf-8');

//---counter to track how many chunks are received
let chunks=0;
readStream.on('data',(chunk)=>{
    chunks++;
    console.log('\n NEW CHUNK\n');
    //show size of the current chunk
    console.log('chunk length:',chunk.length);
    //---print chunk content
   console.log(`Chunk ${chunks} received (${chunk.length} bytes)`);

    //to print the large file in terminal
    // console.log(chunk);
    
    //write content to the new file to identify the chunks
    writeStream.write('\n NEW chunck\n');

    //Copy the current chunk into the new file
   readStream.pipe(writeStream);
      
});
  
// This event runs when the entire file has been read
readStream.on('end',()=>{
    Logger.info('Finished Reading File');
    
});

// Handle errors while reading
readStream.on("error", (err) => {
    console.log("Read Error:", err.message);
});
// Handle errors while writing
writeStream.on("error", (err) => {
    console.log("Write Error:", err.message);
});


