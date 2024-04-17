"use strict";

var fs = require('fs');
var crypto = require('crypto');

//genrate jwt secret key
var jwtSecretKey = crypto.randomBytes(32).toString('hex');
fs.writeFileSync('.env', 'JWT_SECRET=${jwtSecretKey} ');
console.log('new Jwt secret key generated');