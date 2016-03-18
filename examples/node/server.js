/**
 * User: mengkeys
 * Date: 16-3-18
 * File: node.js ueditor demo
 */

const http = require('http');
const path = require('path');
const config = path.join(__dirname,'config.ueditor.json');
const UE = require('node-ueditor');
const ue = new UE(config);

var server = http.createServer(function (req, res) {

});

server.listen(3000, function () {
   console.log('Server listen at port 3000.');
});
