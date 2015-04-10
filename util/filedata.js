var fs = require("fs");
var when = require("when");

function readdata(path){

}

function filedata( path, callback ){
    var ret = false;
    fs.exists(path, function(exists){
        if(exists){

        }
    });

    if(callback && typeof callback === "function"){

    }else{
        var defer = when.defer();


    }
    return ret;
}
