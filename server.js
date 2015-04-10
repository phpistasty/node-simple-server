var Hapi = require("hapi");
var config = require("./config");

var server = new Hapi.Server();
var filedataHandler = require("./util/filedataHandler");

server.connection({
    port: config.get("port")
});

server.route({
    method : "GET",
    path : "/test",
    handler : filedataHandler("./data/example.json")
});

server.register([
    { register : require("./plugins/example-routes") }
], function(){
    server.start(function () {
        console.log("Server running at:", server.info.uri);
    });
});