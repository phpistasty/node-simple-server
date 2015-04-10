var Hapi = require("hapi");
var config = require("./config");

var server = new Hapi.Server();

server.connection({
    port: config.get("port")
});



server.register([
    { register : require("./plugins/example-routes") }
], function(){
    server.start(function () {
        console.log("Server running at:", server.info.uri);
    });
});