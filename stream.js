const fs = require('fs');
const zlib = require('zlib');
var data = '';

function readFileStream(){
var readStream = fs.createReadStream('inputfile.txt');
readStream.setEncoding('UTF8');

readStream.on('data',(chunk)=>{
    data += chunk;
})
readStream.on('end',()=>{
    console.log(data);
})
readStream.on('err',(err)=>{
    console.log(err);
})
}
// readFileStream();
// writing to a file....
function writeFileStream(){
    var dataWrite = "Writing to file by dj";
    var writeStream = fs.createWriteStream('inputfile.txt');
    writeStream.write(dataWrite,'UTF8');
    writeStream.end();
    writeStream.on('finish',()=>{
        console.log("Data write into file successfully");
        readFileStream();
    })
    writeStream.on('err',()=>{
        console.log(err)
    })
    
}
writeFileStream();

//chaining stream...

fs.createReadStream('inputfile.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('inputfile.txt.gz'))
    console.log("File Compressed")