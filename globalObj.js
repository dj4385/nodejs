// console.log("dir name:",__dirname);
// console.log("file name:",__filename);
const os = require('os');
console.log("cup arch.",os.arch());
console.log("cpus",os.cpus());
console.log("network interface",os.networkInterfaces());
console.log("userInfo",os.userInfo());