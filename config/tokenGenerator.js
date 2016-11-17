/*
This is intended to return a time stamp and its corresponding 64 bit SHA256 hash.
repl.it requires this to be updated every five days. 
*/
var crypto = require('crypto-js');

var secret = "8ix35rx6b8qlw5y5"

module.exports = function(){
	var time = Date.now()
	var hash = crypto.HmacSHA256(String(time),secret)
	var hash64 = crypto.enc.Base64.stringify(hash)
	console.log(time,hash64)
	return [time,hash64]
};