'use strict';

var fs = require("fs");
var when = require("when");

function readdata(path){
    var defer = when.defer();
    fs.exists(path, function(exists){
        if(exists){
            fs.readFile(path, {encoding : 'utf-8'}, function(err, data){
                if(!err){
                    defer.resolve(data);
                }else{
                    defer.reject(false);
                }
            })
        }else{
            defer.reject(false);
        }
    });
    return defer.promise;
}

function filedata( path, callback ){
    var defer = when.defer();
    if(callback && typeof callback === "function"){
        readdata(path).then(callback, callback);
    }else{
        readdata(path).then(defer.resolve, defer.reject);
    }
    return defer.promise;
}

module.exports = filedata;