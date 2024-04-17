const fs = require('fs');
const crypto  =require('crypto');

//genrate jwt secret key
const jwtSecretKey = crypto.randomBytes(32).toString('hex');
fs.writeFileSync('.env','JWT_SECRET=${jwtSecretKey} ');
console.log('new Jwt secret key generated')