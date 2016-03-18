/**
 * User: xtech
 * Date: 16-3-18
 * File:
 */

var formidable = require('formidable');

module.exports = function (coming, callback) {
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.uploadDir = "/my/dir";
    form.keepExtensions = false;
    form.maxFieldsSize = 2 * 1024 * 1024;
    form.maxFields = 1000;
    form.hash = false;
    form.multiples = false;
    form.parse(coming, callback);
};