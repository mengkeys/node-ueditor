/**
 * User: xtech
 * Date: 16-3-18
 * File:
 */

var path    = require('path');
var parser  = require(path.join(__dirname,'parse'));
var config  = require(path.join(__dirname,'config'));

// UEditor Object.
var UEditor = {};

// setter
UEditor.set = function (options) {
    var keys = Object.keys(options);
    keys.forEach(function (item) {
       this[item] = options[item];
    });
};

// getter
UEditor.get = function (name) {
    return this[name];
};

UEditor.prototype.config = function () {

};

// update image/images.
UEditor.prototype.updateImage = function (imageDirector, callaback) {
    return callback(null, imageDirector);
};

// update video.
UEditor.prototype.updateVideo = function (videoDirectory, callback) {
    return callback(null, videoDirectory)
};

// update file / files.
UEditor.prototype.updateFile = function () {

};

// update draw
UEditor.prototype.updateDraw = function () {

};

// get list of images.
UEditor.prototype.listImages = function () {

};

/* ue init
 *
 *
 * */
UEditor.prototype.ue = function (options, callback) {


    return callback(null, options);
};



module.exports = UEditor;