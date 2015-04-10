"use strict";

var filedata = require("./filedata");

function filedataHandler(path){
    return function(request, reply){
        filedata(path ,reply);
    }
}
module.exports = filedataHandler;