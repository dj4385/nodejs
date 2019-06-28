var crypto = require('crypto');

var plainText = "DheerajSharama";

var hash = crypto.createHmac('sha256',plainText)
                .update("Dj")
                .digest('hex')

console.log(hash+" \nLength of string:"+hash.length);

// Hmac

var cipher = crypto.createCipher('aes192','VAmp2424');
var encrypted = cipher.update('Dheeraj Sharma','utf8','hex');
encrypted += cipher.final('hex');
console.log(encrypted + "Length of cypher aes method:" + encrypted.length)

//Decrypt
const decipher = crypto.createDecipher('aes192', 'VAmp2424');  
var encrypted = 'bab96b748099d8d0f575c13b213a8e45cb72332a4a4ec51e46f48227ccb46798';  
var decrypted = decipher.update(encrypted, 'hex', 'utf8');  
decrypted += decipher.final('utf8');  
console.log(decrypted);  